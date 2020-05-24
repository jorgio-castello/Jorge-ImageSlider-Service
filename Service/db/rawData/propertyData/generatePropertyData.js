const faker = require('faker');
const fs = require('fs');
const os = require('os');
const path = require('path');

const numberOfProperties = 10000000;

const mariaPropertyDataPath = path.join(__dirname, './MariaPropertyData.txt');
const mariaPropertyPhotoUrls = path.join(__dirname, '../photoData/S3-picture-urls.txt');

const { createMariaPropertyStr } = require('./helpers/createMariaPropertyStr');

const writeMariaPropertyData = () => {
  let propertyMariaStr = '';
  const propertyMariaStringsArr = [];

  fs.readFile(mariaPropertyPhotoUrls, 'utf-8', (err, photoBlocksStr) => {
    if (err) {
      throw new Error(err);
    } else {
      const blockUrls = photoBlocksStr.split(os.EOL);

      console.log('Working on Property #1');
      for (let i = 1; i <= numberOfProperties; i++) {
        if (propertyMariaStr.length > 2 ** 28 - 1) {
          propertyMariaStringsArr.push(propertyMariaStr);
          propertyMariaStr = '';
          console.log(`Working on Property #${i}`);
        }
        propertyMariaStr += createMariaPropertyStr(i, faker.random.arrayElement(blockUrls));
      }

      if (propertyMariaStr.length) {
        propertyMariaStringsArr.push(propertyMariaStr);
      }


      const createMariaPropertyTxtFile = (count = 0) => {
        if (count !== propertyMariaStringsArr.length) {
          fs.appendFile(mariaPropertyDataPath, propertyMariaStringsArr[count], (err) => {
            if (err) {
              throw new Error(err);
            } else {
              createMariaPropertyTxtFile(count + 1);
            }
          });
        }
      }
      const startTime = new Date();
      console.log(`Starting to write to txt file called ${path.basename(mariaPropertyDataPath)}`);
      createMariaPropertyTxtFile();
      const endTime = new Date();
      const time = endTime.getTime() / 1000 - startTime.getTime() / 1000;
      console.log(`Finished in ${time} seconds`);
    }
  });





};

writeMariaPropertyData();

// Need to read in photo data, pass it to createMariaPropertyStr, and figure out a way to get that into .txt file