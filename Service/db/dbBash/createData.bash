# VARIABLES --------------------------------------------------------------------------------
# City / Location Data - Generation Scripts
createLocationsMaria=$(pwd)/db/seedScripts/createMariaCityData.js
createPropertiesMaria=$(pwd)/db/seedScripts/createMariaPropertyData.js
createLocationsCassandra=$(pwd)/db/seedScripts/createCassandraCityData.js
createPropertiesCassandra=$(pwd)/db/seedScripts/createCassandraPropertyData.js

# Data file locations ----------------------------------------------------------------------
mariaLocationTxt=$(pwd)/db/rawData/locationData/MariaCityData.txt
mariaPropertyTxt=$(pwd)/db/rawData/propertyData/MariaPropertyData.txt
cassandraLocationCSV=$(pwd)/db/rawData/locationData/CassandraCityData.csv
cassandraPropertyCSV=$(pwd)/db/rawData/propertyData/CassandraPropertyData.csv
cassandraPropertyByPriceCSV=$(pwd)/db/rawData/propertyData/CassandraPropertyDataByPrice.csv
cassandraPropertyByBedsCSV=$(pwd)/db/rawData/propertyData/CassandraPropertyDataByBeds.csv
cassandraPropertyByPropertyTypeCSV=$(pwd)/db/rawData/propertyData/CassandraPropertyDataByPropertyType.csv

# OPERATIONS -------------------------------------------------------------------------------
# Delete old files -------------------------------------------------------------------------
rm $mariaLocationTxt || true
rm $mariaPropertyTxt || true
rm $cassandraLocationCSV || true
rm $cassandraPropertyCSV || true
rm $cassandraPropertyByPriceCSV || true
rm $cassandraPropertyByBedsCSV || true
rm $cassandraPropertyByPropertyTypeCSV || true

# Create new data files --------------------------------------------------------------------
echo "GENERATING MARIA LOCATIONS DATA..."
node --max-old-space-size=20000 $createLocationsMaria
echo "GENERATING MARIA PROPERTIES DATA..."
node --max-old-space-size=20000 $createPropertiesMaria
echo "GENERATING CASSANDRA LOCATIONS DATA..."
node --max-old-space-size=20000 $createLocationsCassandra
echo "GENERATING CASSANDRA PROPERTIES DATA..."
node --max-old-space-size=20000 $createPropertiesCassandra