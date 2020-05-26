const fs = require('fs');
const os = require('os');
const path = require('path');

const { createCityStringMaria, createCityStringCassandra } = require('./helpers/createCityString');

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
    console.log(`Finished writing city data to ${path.basename(mariaTxtFilePath)}
      in ${Math.floor(endTime.getTime() / 1000 - startTime.getTime() /1000)}s`
    );
  });
};
// ----------------------------------------------------------------------------------
// CASSANDRA - Location Data csv file generation for bulk loading into DB
// ----------------------------------------------------------------------------------
const generateCSVDataForCassandra = (cityArrCassandra, count = 0) => {
  const startTime = new Date();
  console.log(`Writing city data for Cassandra to ${path.basename(cassandraCSVFilePath)}`)
  if (cityArrCassandra.length !== count) {
    fs.appendFile(cassandraCSVFilePath, cityArrCassandra[count], (err) => {
      if (err) {
        throw new Error(err);
      } else {
        generateCSVDataForCassandra(cityArrCassandra, count + 1);
      }
    });
  } else {
    const endTime = new Date();
    console.log(`Finished writing city data to ${path.basename(cassandraCSVFilePath)}
      in ${Math.floor(endTime.getTime() / 1000 - startTime.getTime() /1000)}s`
    );
  }
}
// ----------------------------------------------------------------------------------
const cityStrMaria = createCityStringMaria(10000);
const cityArrCassandra = createCityStringCassandra(10000000, generateCSVDataForCassandra);
// generateCSVDataForCassandra(cityArrCassandra);
// generateTxtDataForMaria(cityStr);