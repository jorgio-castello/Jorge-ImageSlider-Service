# VARIABLES --------------------------------------------------------------------------------
sqlFile=$(pwd)/db/maria/schema.sql
# OPERATIONS -------------------------------------------------------------------------------
echo "SEEDING MARIADB..."
mysql -u root -p < $sqlFile

