# VARIABLES --------------------------------------------------------------------------------
# Maria SQL file
sqlFile=$(pwd)/db/maria/schema.sql

# # Location Data
createMariaLocationTxt=$(pwd)/db/rawData/locationData/generateCityData.js
mariaLocationTxt=$(pwd)/db/rawData/locationData/MariaCityData.txt

# Property Data
createMariaPropertyData=$(pwd)/db/rawData/propertyData/generatePropertyData.js
mariaPropertyTxt=$(pwd)/db/rawData/propertyData/MariaPropertyData.txt
# ------------------------------------------------------------------------------------------
# Operations -------------------------------------------------------------------------------
# # Delete old text files
rm $mariaLocationTxt || true
rm $mariaPropertyTxt || true

# # Create new text files
node $createMariaLocationTxt
node --max-old-space-size=20000 $createMariaPropertyData

# Seed database
mysql -u root -p < $sqlFile