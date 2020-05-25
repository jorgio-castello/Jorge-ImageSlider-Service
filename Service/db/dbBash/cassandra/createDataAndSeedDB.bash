# VARIABLES --------------------------------------------------------------------------------
# Maria SQL file
cqlFile=$(pwd)/db/cassandra/schema.cql

# # Location Data
createLocationCSV=$(pwd)/db/rawData/locationData/generateCityData.js
cassandraLocationCSV=$(pwd)/db/rawData/locationData/CassandraCityData.csv

# # Property Data
# createMariaPropertyData=$(pwd)/db/rawData/propertyData/generatePropertyData.js
# mariaPropertyTxt=$(pwd)/db/rawData/propertyData/MariaPropertyData.txt
# ------------------------------------------------------------------------------------------
# Operations -------------------------------------------------------------------------------
# # Delete old text files
rm $cassandraLocationCSV || true
# rm $mariaPropertyTxt || true

# # Create new text files
node $createLocationCSV
# node --max-old-space-size=20000 $createMariaPropertyData

# Seed database
cqlsh 127.0.0.1 9042 source < $cqlFile;