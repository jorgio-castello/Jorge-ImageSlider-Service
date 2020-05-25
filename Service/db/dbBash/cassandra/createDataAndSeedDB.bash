# VARIABLES --------------------------------------------------------------------------------
# Maria SQL file
cqlFile=$(pwd)/db/cassandra/schema.cql

# # Location Data
createLocationCSV=$(pwd)/db/rawData/locationData/generateCityData.js
cassandraLocationCSV=$(pwd)/db/rawData/locationData/CassandraCityData.csv

# # Property Data
createPropertyData=$(pwd)/db/rawData/propertyData/generatePropertyData.js
cassandraPropertyCSV=$(pwd)/db/rawData/propertyData/CassandraPropertyData.csv
# ------------------------------------------------------------------------------------------
# Operations -------------------------------------------------------------------------------
# # Delete old text files
rm $cassandraLocationCSV || true
rm $cassandraPropertyCSV || true

# # Create new text files
node $createLocationCSV
node --max-old-space-size=20000 $createPropertyData

# Seed database
cqlsh 127.0.0.1 9042 source < $cqlFile;