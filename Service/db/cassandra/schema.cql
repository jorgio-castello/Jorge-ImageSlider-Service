DROP KEYSPACE IF EXISTS similar_properties;
CREATE KEYSPACE similar_properties
WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 3};

USE similar_properties;

CREATE TABLE similar_properties.locations (
  address_id INT,
  location TEXT,
  PRIMARY KEY(address_id)
);

CREATE TABLE similar_properties.propertiesByRating (
  location TEXT,
  rating DECIMAL,
  property_type TEXT,
  bed_num INT,
  description TEXT,
  price_per_night INT,
  awsBlockUrl text,
  PRIMARY KEY(location, rating)
)
WITH CLUSTERING ORDER BY(rating DESC);

CREATE TABLE similar_properties.propertiesByPrice (
  location TEXT,
  rating DECIMAL,
  property_type TEXT,
  bed_num INT,
  description TEXT,
  price_per_night INT,
  awsBlockUrl text,
  PRIMARY KEY(location, price_per_night)
)
WITH CLUSTERING ORDER BY(price_per_night DESC);

CREATE TABLE similar_properties.propertiesByNumberOfBeds (
  location TEXT,
  rating DECIMAL,
  property_type TEXT,
  bed_num INT,
  description TEXT,
  price_per_night INT,
  awsBlockUrl text,
  PRIMARY KEY(location, bed_num)
)
WITH CLUSTERING ORDER BY(bed_num DESC);

COPY similar_properties.locations from '/Users/jorgecastello/Code/HackReactor/capstones/SDC/work/ImageService/Service/db/rawData/locationData/CassandraCityData.csv';

COPY similar_properties.propertiesByRating from '/Users/jorgecastello/Code/HackReactor/capstones/SDC/work/ImageService/Service/db/rawData/propertyData/CassandraPropertyData.csv';

COPY similar_properties.propertiesByRating(location, price_per_night, awsblockurl, bed_num, description, property_type, rating) to '/Users/jorgecastello/Code/HackReactor/capstones/SDC/work/ImageService/Service/db/rawData/propertyData/CassandraPropertyDataByPrice.csv';

COPY similar_properties.propertiesByPrice from '/Users/jorgecastello/Code/HackReactor/capstones/SDC/work/ImageService/Service/db/rawData/propertyData/CassandraPropertyDataByPrice.csv';

COPY similar_properties.propertiesByRating(location, bed_num, awsblockurl, description, price_per_night, property_type, rating) to '/Users/jorgecastello/Code/HackReactor/capstones/SDC/work/ImageService/Service/db/rawData/propertyData/CassandraPropertyDataByBeds.csv';

COPY similar_properties.propertiesByNumberOfBeds from '/Users/jorgecastello/Code/HackReactor/capstones/SDC/work/ImageService/Service/db/rawData/propertyData/CassandraPropertyDataByBeds.csv';