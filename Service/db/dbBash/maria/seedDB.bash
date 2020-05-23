# Maria SQL file
sqlFile=$(pwd)/db/maria/schema.sql

# Seed database
mysql -u root -p < $sqlFile