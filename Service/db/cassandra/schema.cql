DROP KEYSPACE IF EXISTS similar_properties;
CREATE KEYSPACE similar_properties;

USE similar_properties;

CREATE TABLE similar_properties.locations (
  address_id INT,
  location TEXT,
  PRIMARY KEY(address_id)
);

CREATE TABLE similar_properties.regions (
  city TEXT,
  rating DECIMAL,
  property_type TEXT,
  bed_num INT,
  description TEXT,
  price_per_night INT,
  awsBlockUrl text,
  PRIMARY KEY(city, rating)
);

POTENTIAL GET REQUEST
-- GET /properties/:id/similarHomes

STEP 1: GET THE CITY OF THE PROPERTY
- SELECT city FROM similar_properties.regions WHERE address_id=${id}
STEP 2: GET THE TOP 12 HOMES BASED ON RATING IN THAT CITY
- SELECT * FROM similar_