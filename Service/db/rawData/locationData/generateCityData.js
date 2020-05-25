const fs = require('fs');
const os = require('os');
const path = require('path');

const { createCityString } = require('./helpers/createCityString');

const numberOfLocations = 10000; // Drives the number of locations in this file
const mariaTxtFilePath = path.join(__dirname, 'MariaCityData.txt');
const cassandraCSVFilePath = path.join(__dirname, 'CassandraCityData.csv');

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
// ----------------------------------------------------------------------------------
// CASSANDRA - Location Data csv file generation for bulk loading into DB
// ----------------------------------------------------------------------------------
const generateCSVDataForCassandra = (cityStrCassandra) => {
  const startTime = new Date();
  console.log(`Writing city data for Cassandra to ${path.basename(cassandraCSVFilePath)}`);
  fs.appendFile(cassandraCSVFilePath, cityStrCassandra, (err) => {
    if (err) {
      throw new Error(err);
    } else {
      const endTime = new Date();
      console.log(`Finished writing city date to ${path.basename(mariaTxtFilePath)} in ${endTime.getTime() / 1000 - startTime.getTime() /1000}s`);
    }
  });

}
// ----------------------------------------------------------------------------------
const cityStr = createCityString(numberOfLocations);
generateCSVDataForCassandra(cityStr);
// generateTxtDataForMaria(cityStrMaria);