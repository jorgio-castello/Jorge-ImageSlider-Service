# VARIABLES --------------------------------------------------------------------------------
# Maria SQL file
sqlFile=$(pwd)/db/maria/schema.sql

# # Location Data
createMariaLocationTxt=$(pwd)/db/rawData/locationData/generateCityData.js
mariaLocationTxt=$(pwd)/db/rawData/locationData/MariaCityData.txt

# Property Data
# createMariaPropertyData=$(pwd)/rawData/propertyData/generatePropertyData.js
# mariaPropertyTxt=$(pwd)/rawData/propertyData/MariaPropertyData.txt
# ------------------------------------------------------------------------------------------
# Operations -------------------------------------------------------------------------------
# # Delete old text files
rm $mariaLocationTxt || true
# # rm $mariaPropertyTxt || true

# # Create new text files
node $createMariaLocationTxt

# Seed database
mysql -u root -p < $sqlFile
