const faker = require('faker');
const fs = require('fs');
const os = require('os');

const numberOfLocations = 2; // Drives the number of locations in this file
const cityObj = {}; // Temporary save data in an object

// Generate Seed Data for Cities and Prevent Duplicates
for (let i = 1; i <= numberOfLocations; i += 1) {
  cityObj[faker.address.city()] = true;
}

// ----------------------------------------------------------------------------------
// MARIA - Location Data txt file generation for bulk loading into DB
// ----------------------------------------------------------------------------------
const startTimeMaria = new Date(); // Track how long it takes to generateFiles
const generateTxtDataForMaria = (cityArr, cityEntryCount = 0) => {
  if (cityEntryCount === cityArr.length) { // BASE CASE: all the cities are added
    const endTimeMaria = new Date();
    console.log(`City generation completed in
                  ${endTimeMaria.getTime() - startTimeMaria.getTime()}ms`
                );
  } else {
    const newCity = cityArr[cityEntryCount];
    const newCityText = `${cityEntryCount + 1},${newCity}${os.EOL}`;

    fs.appendFile('./MariaCityData.txt', newCityText, (err) => {
      if (err) {
        throw new Error(err);
      }
      generateTxtDataForMaria(cityArr, cityEntryCount + 1);
    });
  }
};

generateTxtDataForMaria(Object.keys(cityObj));

// let citiesForTxtFile = cityArr.map((city, index) => )