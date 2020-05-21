DROP KEYSPACE IF EXISTS similar_properties;
CREATE KEYSPACE similar_properties;

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
  PRIMARY KEY(city, rating)
);

CREATE TABLE similar_properties.propertiesByPrice (
  location TEXT,
  rating DECIMAL,
  property_type TEXT,
  bed_num INT,
  description TEXT,
  price_per_night INT,
  awsBlockUrl text,
  PRIMARY KEY(city, price_per_night)
);

CREATE TABLE similar_properties.propertiesByNumberOfBeds (
  location TEXT,
  rating DECIMAL,
  property_type TEXT,
  bed_num INT,
  description TEXT,
  price_per_night INT,
  awsBlockUrl text,
  PRIMARY KEY(city, bed_num)
);

POTENTIAL GET REQUEST
-- GET /properties/:id/similarHomes

STEP 1: GET THE CITY OF THE PROPERTY
- SELECT city FROM similar_properties.regions WHERE address_id=${id}
STEP 2: GET THE TOP 12 HOMES BASED ON RATING IN THAT CITY
- SELECT * FROM similar_