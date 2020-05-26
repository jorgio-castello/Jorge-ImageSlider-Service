// ----------------------------------------------------------------------------------
// SEED PROPERTIES: Both DBs include 10,000,000 cities
// ----------------------------------------------------------------------------------
module.exports.numberOfProperties = 10000000;

// ----------------------------------------------------------------------------------
// SEED LOCATIONS: Both DBs include 10,000 cities
// ----------------------------------------------------------------------------------
// // Maria: 10,000 cities are stored
module.exports.citiesMaria = 10000;

// Cassandra: 10M city entries are stored in the locations table, 1 for each property, 10,000 cities used
module.exports.numberOfCityEntriesInCassandraLocationsTable = module.exports.numberOfProperties;
