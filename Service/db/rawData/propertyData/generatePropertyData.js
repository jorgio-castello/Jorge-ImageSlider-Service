const faker = require('faker');
const fs = require('fs');
const path = require('path');

const numberOfProperties = 10000000;

const mariaPropertyDataPath = path.join(__dirname, './MariaPropertyData.txt');

const { createMariaPropertyStr } = require('./helpers/createMariaPropertyStr');

const writeMariaPropertyData = () => {
  let propertyMariaStr = '';
  for (let i = 1; i <= numberOfProperties; i++) {
    propertyMariaStr += createMariaPropertyStr(i);
  }

  const startTime = new Date();
  console.log(`Starting to write to txt file called ${path.basename(mariaPropertyDataPath)}`);

  fs.appendFile(mariaPropertyDataPath, propertyMariaStr, (err) => {
    if (err) {
      throw new Error(err);
    } else {
      const endTime = new Date();
      const time = startTime.getTime() / 1000 - endTime.getTime() / 1000;
      console.log(`Finished in ${time} seconds`);
    }
  });
};

writeMariaPropertyData();

// Need to read in photo data, pass it to createMariaPropertyStr, and figure out a way to get that into .txt file