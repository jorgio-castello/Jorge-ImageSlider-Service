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
);

CREATE TABLE similar_properties.propertiesByPrice (
  location TEXT,
  rating DECIMAL,
  property_type TEXT,
  bed_num INT,
  description TEXT,
  price_per_night INT,
  awsBlockUrl text,
  PRIMARY KEY(location, price_per_night)
);

CREATE TABLE similar_properties.propertiesByNumberOfBeds (
  location TEXT,
  rating DECIMAL,
  property_type TEXT,
  bed_num INT,
  description TEXT,
  price_per_night INT,
  awsBlockUrl text,
  PRIMARY KEY(location, bed_num)
);