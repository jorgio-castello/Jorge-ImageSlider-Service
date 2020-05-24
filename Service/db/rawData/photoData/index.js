// Dependencies needed for this module
const path = require('path');
const fs = require('fs');
const faker = require('faker');

// Helper function
// 1. uploads each image found in pictureFolderPath to S3
// 2. writes the image path to .txt file
const { uploadPictures } = require('./helpers/uploadS3');

// Path to pictures
const pictureFolderPath = path.join(__dirname, 'photos');

// Kick start this process by invoking fs.readdir on pictureFolderPath
// Pass the array of image paths to uploadPicturesAndGetUrls
fs.readdir(pictureFolderPath, (err, picturePaths) => {
  if (err) {
    throw new Error(err);
  } else {
    // Generates photo blocks in collections of 4 images
    // Each photo block collection is appended with a charCode starting from 60, allowing for a massive generation of photo blocks to be created from the same set of photos
    const generatePhotoBlockDataForAWS = (charCode) => {
      if ( charCode <= 122 ) {
        picturePaths = faker.helpers.shuffle(picturePaths); // Shuffle the photos so they will be grouped differently
        uploadPictures(picturePaths, 0, charCode, (charCode) => generatePhotoBlockDataForAWS(charCode + 1));
      } else {
        console.log('Done seeding AWS S3...');
      }
    }
    generatePhotoBlockDataForAWS(60);
  }
});