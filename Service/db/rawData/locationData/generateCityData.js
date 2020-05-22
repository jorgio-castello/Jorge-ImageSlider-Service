const faker = require('faker');
const fs = require('fs');
const os = require('os');

const numberOfLocations = 10000; // Drives the number of locations in this file
const cityObj = {}; // Temporary save data in an object to prevent duplicate cities
let cityStrMaria = ''; // This string will include all cities in MySQL ready format
const mariaTxtFilePath = './MariaCityData.txt';

// Generate Seed Data for Cities (MARIA TXT FILE FORMAT)
for (let i = 1; i <= numberOfLocations; i += 1) {
  const city = faker.address.city(); // Create a random city
  if (!cityObj[city]) { // If the city isn't already in the cityObj
    cityObj[city] = true; // Add it to the cityObj
    // i represents the primary key, city remends the random city, os.EOL = linebreak
    cityStrMaria += `${i},${city}${os.EOL}`; // concat the string with this city
  } else { // if the city has already been added, reset i so we reach 10,000 cities
    i = i - 1;
  }
}

// ----------------------------------------------------------------------------------
// MARIA - Location Data txt file generation for bulk loading into DB
// ----------------------------------------------------------------------------------
const generateTxtDataForMaria = (cityStrMaria) => {
  fs.appendFile(mariaTxtFilePath, cityStrMaria, (err) => {
    if (err) {
      throw new Error(err);
    }
    console.log('Write complete');
  });
};

generateTxtDataForMaria(cityStrMaria);