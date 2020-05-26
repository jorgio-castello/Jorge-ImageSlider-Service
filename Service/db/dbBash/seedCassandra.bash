# VARIABLES --------------------------------------------------------------------------------
cqlFile=$(pwd)/db/cassandra/schema.cql
# OPERATIONS -------------------------------------------------------------------------------
echo "SEEDING CASSANDRA..."
cqlsh 127.0.0.1 9042 source < $cqlFile;