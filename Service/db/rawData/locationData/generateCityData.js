const faker = require('faker');
const fs = require('fs');
const os = require('os');
const path = require('path');

const numberOfLocations = 10000; // Drives the number of locations in this file
const cityObj = {}; // Temporary save data in an object to prevent duplicate cities
let cityStrMaria = ''; // This string will include all cities in MySQL ready format
const mariaTxtFilePath = path.join(__dirname, 'MariaCityData.txt');

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
  const startTime = new Date();
  console.log(`Writing city data for Maria to ${path.basename(mariaTxtFilePath)}`)
  fs.appendFile(mariaTxtFilePath, cityStrMaria, (err) => {
    if (err) {
      throw new Error(err);
    }
    const endTime = new Date();
    console.log(`Finished writing city date to ${path.basename(mariaTxtFilePath)} in ${Math.floor(endTime.getTime() / 1000 - startTime.getTime() /1000)}s`
    );
  });
};

generateTxtDataForMaria(cityStrMaria);

module.exports.cityStrMaria = cityStrMaria;
module.exports.generateTxtDataForMaria = generateTxtDataForMaria;
module.exports.numberOfLocations = numberOfLocations;