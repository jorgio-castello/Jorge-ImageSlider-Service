const os = require('os');

const { generatePropertyType,   // generates a random property
        numberOfBeds,           // generates a random number of beds based on property type
        priceByPropertyPerRoom, // generates a random price based on property type
        generateDescription,    // generates a random description for the property
        generateRandomNumber    // generates a random number between a given min and max
      } = require('./index');

// Based on the number of locations created in locationsData file
const numberOfLocations = 10000;

const createMariaPropertyStr = (primaryKey, photoUrl) => {
  const rating = generateRandomNumber(100, 500) / 100;
  const property_type = generatePropertyType();
  const bed_num = numberOfBeds[property_type]();
  const description = generateDescription();
  const price_per_night = bed_num * priceByPropertyPerRoom[property_type]();
  const awsBlockUrl = photoUrl;
  const location_id = generateRandomNumber(1, numberOfLocations);

  return `${primaryKey},${rating},'${property_type}',${bed_num},'${description}',${price_per_night},'${awsBlockUrl}',${location_id}${os.EOL}`;
};

module.exports.createMariaPropertyStr = createMariaPropertyStr;