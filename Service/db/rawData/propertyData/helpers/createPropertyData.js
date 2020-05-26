const faker = require('faker');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { createMariaPropertyStr, createCassandraPropertyStrByRating } = require('./createPropertyStr');

// ----------------------------------------------------------------------------------
// MARIA - Create property data
// ----------------------------------------------------------------------------------
const createMariaPropertyData = (blockUrls, numberOfProperties) => {
  let propertyStr = '';
  const propertyStrArr = [];

  console.log('Working on Property #1');
  for (let i = 1; i <= numberOfProperties; i++) {
    if (propertyStr.length > 2 ** 28 - 1) {
      propertyStrArr.push(propertyStr);
      propertyStr = '';
      console.log(`Working on Property #${i}`);
    }
    propertyStr += createMariaPropertyStr(i, faker.random.arrayElement(blockUrls));
  }

  if (propertyStr.length) {
    propertyStrArr.push(propertyStr);
  }

  return propertyStrArr;
};

  // ----------------------------------------------------------------------------------
  // CASSANDRA - Create property data
  // ----------------------------------------------------------------------------------
const createCassandraPropertyData = (blockUrls, numberOfProperties, callback) => {
  let propertyStr = '';
  const propertyStrArr = [];

  fs.readFile(path.join(__dirname,'../../locationData/CassandraCityData.csv'), 'utf-8', (err, data) => {
    if (err) {
      throw new Error(err);
    } else {
      const cities = data.split(os.EOL).map(item => item.split(','));
      cities.pop();

      console.log('Working on Property #1');
      for (let i = 1; i <= numberOfProperties; i++) {
        if (propertyStr.length > 2 ** 28 - 1) {
          propertyStrArr.push(propertyStr);
          propertyStr = '';
          console.log(`Working on Property #${i}`);
        }

        // Grab appropriate data from locations table to maintain constistency during db seeding
        const [ propertyId, bedNums, city, pricePerNight, propertyType, rating ] = cities[i - 1];

        // Generate other data needed for Cassandra Property Str
        const randomBlockUrl = faker.random.arrayElement(blockUrls);

        propertyStr += createCassandraPropertyStrByRating(city, randomBlockUrl, propertyType, rating, bedNums, pricePerNight);
      }

      if (propertyStr.length) {
        propertyStrArr.push(propertyStr);
      }

      callback(propertyStrArr);
    }
  });
};

module.exports.createMariaPropertyData = createMariaPropertyData;
module.exports.createCassandraPropertyData = createCassandraPropertyData;