const fs = require('fs');
const os = require('os');
const path = require('path');

const numberOfProperties = 10000000;

const mariaPropertyDataPath = path.join(__dirname, './MariaPropertyData.txt');
const cassandraPropertyDataPath = path.join(__dirname, './CassandraPropertyData.csv');
const photoBlockUrls = path.join(__dirname, '../photoData/S3-picture-urls.txt');

const { createCassandraPropertyData, createMariaPropertyData } = require('./helpers/createPropertyData');

// ----------------------------------------------------------------------------------
// MARIA - Write Property Data to .txt file
// ----------------------------------------------------------------------------------
const writeMariaPropertyData = () => {
  fs.readFile(photoBlockUrls, 'utf-8', (err, photoBlocksStr) => {
    if (err) {
      throw new Error(err);
    } else {
      const blockUrls = photoBlocksStr.split(os.EOL); // Grab the photo data
      const propertyMariaStringsArr = createMariaPropertyData(blockUrls, numberOfProperties);

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

// ----------------------------------------------------------------------------------
// CASSANDRA - Write Property Data to .csv file
// ----------------------------------------------------------------------------------
const writeCassandraPropertyData = () => {
  fs.readFile(photoBlockUrls, 'utf-8', (err, photoBlocksStr) => {
    if (err) {
      throw new Error(err);
    } else {
      const blockUrls = photoBlocksStr.split(os.EOL);
      const propertyCassandraStringsArr = createCassandraPropertyData(blockUrls, numberOfProperties, (propertyCassandraStringsArr) => {
        const createCassandraPropertyCSVFile = (count = 0) => {
          if (count !== propertyCassandraStringsArr.length) {
            fs.appendFile(cassandraPropertyDataPath, propertyCassandraStringsArr[count], (err) => {
              if (err) {
                throw new Error(err);
              } else {
                createCassandraPropertyCSVFile(count + 1);
              }
            });
          }
        }
        const startTime = new Date();
        console.log(`Starting to write to txt file called ${path.basename(cassandraPropertyDataPath)}`);
        createCassandraPropertyCSVFile();
        const endTime = new Date();
        const time = endTime.getTime() / 1000 - startTime.getTime() / 1000;
        console.log(`Finished in ${time} seconds`);
      });
    }
  });
}

// writeMariaPropertyData();
writeCassandraPropertyData();

// Work on generating three sets of Cassandra Data for queries
// We will need to update Cassandra OG table to include rating, price, beds