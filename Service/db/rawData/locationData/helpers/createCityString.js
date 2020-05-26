const faker = require('faker');
const fs = require('fs');
const os = require('os');
const path = require('path');

const { generatePropertyType,   // generates a random property
  numberOfBeds,           // generates a random number of beds based on property type
  priceByPropertyPerRoom, // generates a random price based on property type
  generateRandomNumber    // generates a random number between a given min and max
} = require('../../propertyData/helpers/index');


const createCityStringMaria = (numberOfLocations) => {
  const cityObj = {}; // Temporary save data in an object to prevent duplicate cities
  let cityStr = ''; // This string will include all cities in Maria ready format

  // Generate Seed Data for Cities (MARIA TXT FILE FORMAT)
  for (let i = 1; i <= numberOfLocations; i += 1) {
    const city = faker.address.city(); // Create a random city
    if (!cityObj[city]) { // If the city isn't already in the cityObj
      cityObj[city] = true; // Add it to the cityObj
      // i represents the primary key, city remends the random city, os.EOL = linebreak
      cityStr += `${i},${city}${os.EOL}`; // concat the string with this city
    } else { // if the city has already been added, reset i so we reach 10,000 cities
      i = i - 1;
    }
  }

  return cityStr;
};

const createCityStringCassandra = (numberOfLocations, callback) => {
  fs.readFile(path.join(__dirname,'../MariaCityData.txt'), 'utf-8', (err, data) => {
    const cities = data.split(os.EOL).map(city => city.split(',')).map(city => city[1]);
    let cassandraCityStr = '';
    let cassandraCityStrArr = [];

    for (let i = 1; i <= numberOfLocations; i += 1) {
      if (cassandraCityStr.length > 2 ** 28 - 1) {
        cassandraCityStrArr.push(cassandraCityStr);
        cassandraCityStr = '';
      }
      let propertyType = generatePropertyType();
      let bedNum = numberOfBeds[propertyType]();
      cassandraCityStr += `${i},${bedNum},${faker.random.arrayElement(cities)},${bedNum * priceByPropertyPerRoom[propertyType]()},${propertyType},${generateRandomNumber(100, 500) / 100}${os.EOL}`;
    }

    if ( cassandraCityStr.length ) {
      cassandraCityStrArr.push(cassandraCityStr);
    }

    callback(cassandraCityStrArr);
  });
};

module.exports.createCityStringMaria = createCityStringMaria;
module.exports.createCityStringCassandra = createCityStringCassandra;