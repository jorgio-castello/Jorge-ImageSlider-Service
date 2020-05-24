// Dependencies needed for this module
const AWS = require('aws-sdk');
const path = require('path');
const os = require('os');
const fs = require('fs');

const s3 = new AWS.S3({ apiVersion: '2006-03-01' }); // Creates an s3 instance
const pictureUrlsFilePath = path.join(__dirname, '../', 'S3-picture-urls.txt'); // File path to save image urls

const createPhotoBlock = (setOfPictures, callback, count = 0, photoBlock = []) => {
  if (count !== setOfPictures.length) {
    // File path for image to upload
    const pictureFile = path.join(__dirname, '../', 'photos', setOfPictures[count]);
    const pictureFileStream = fs.readFile(pictureFile, (err, file) => {
      if (err) {
        throw new Error(err);
      } else {
        photoBlock.push({
          imageId: `image_${count}`,
          body: `data:image/jpeg;base64,${new Buffer(file).toString('base64')}`
        });
        createPhotoBlock(setOfPictures, callback, count + 1, photoBlock);
      }
    });
  } else {
    callback(photoBlock);
  }
};

// Recursive function that uploads 4 photos as a block to S3 at a time
const uploadPictures = (pictures, photoBlockIdx, charCode, callback) => {
  if (photoBlockIdx <= pictures.length) {
    const setOfPictures = pictures.slice(photoBlockIdx, photoBlockIdx + 4);

    const pictureBlock = createPhotoBlock(setOfPictures, (photoBlock) => {
      let uploadParams = {
        Bucket: 'airbnbslider',
        Key: `photoblock_${photoBlockIdx}_${String.fromCharCode(charCode)}`,
        Body: JSON.stringify(photoBlock),
        ContentType: 'application/json',
        ACL: 'public-read'
      };

      s3.upload(uploadParams, (err, blockUrl) => {
        if ( err ) {
          throw new Error(err);
        } else {
          fs.appendFile(pictureUrlsFilePath, `${blockUrl.Location}${os.EOL}`, 'utf-8', (err) => {
            if (err) {
              throw new Error(err);
            } else {
              console.log(`Successfully wrote ${blockUrl.Location}`);
              uploadPictures(pictures, photoBlockIdx + 4, charCode, callback);
            }
          });
        }
      });
    });
  } else {
    callback(charCode);
  }
}

module.exports.uploadPictures = uploadPictures;

