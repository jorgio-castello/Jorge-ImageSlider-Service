const fs = require('fs');
const os = require('os');
const path = require('path');

const { createMariaLocationString } = require('./helpers/createMariaLocationString');

const numberOfLocations = 10000; // Drives the number of locations in this file
const mariaTxtFilePath = path.join(__dirname, 'MariaCityData.txt');

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

const cityStrMaria = createMariaLocationString(numberOfLocations);
generateTxtDataForMaria(cityStrMaria);