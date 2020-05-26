// Generate Cities
const { createCityStringCassandra } = require('../rawData/locationData/helpers/createCityString');
const { generateCSVDataForCassandra } = require('../rawData/locationData/generateCityData');
const { numberOfCityEntriesInCassandraLocationsTable } = require('./seedParameters');

/*
Generates a CSV file with 10M entries, one for each property, in the following format:

  address_id INT,
  bed_num INT,
  location TEXT,
  price_per_night INT,
  property_type TEXT,
  rating DECIMAL,
  PRIMARY KEY(address_id)
*/
createCityStringCassandra(numberOfCityEntriesInCassandraLocationsTable, generateCSVDataForCassandra);