# VARIABLES --------------------------------------------------------------------------------
# Maria SQL file
cqlFile=$(pwd)/db/cassandra/schema.cql

# # Location Data
createLocationCSV=$(pwd)/db/rawData/locationData/generateCityData.js
cassandraLocationCSV=$(pwd)/db/rawData/locationData/CassandraCityData.csv

# # Property Data
createPropertyData=$(pwd)/db/rawData/propertyData/generatePropertyData.js
cassandraPropertyCSV=$(pwd)/db/rawData/propertyData/CassandraPropertyData.csv
cassandraPropertyByPriceCSV=$(pwd)/db/rawData/propertyData/CassandraPropertyDataByPrice.csv
cassandraPropertyByBedsCSV=$(pwd)/db/rawData/propertyData/CassandraPropertyDataByBeds.csv
# ------------------------------------------------------------------------------------------
# Operations -------------------------------------------------------------------------------
# # Delete old text files
rm $cassandraLocationCSV || true
rm $cassandraPropertyCSV || true
rm $cassandraPropertyByPriceCSV || true
rm $cassandraPropertyByBedsCSV || true

# # Create new text files
node --max-old-space-size=20000 $createLocationCSV
node --max-old-space-size=20000 $createPropertyData

# Seed database
cqlsh 127.0.0.1 9042 source < $cqlFile;