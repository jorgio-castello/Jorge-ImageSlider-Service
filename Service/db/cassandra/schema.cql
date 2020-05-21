DROP KEYSPACE IF EXISTS similar_properties;
CREATE KEYSPACE similar_properties;

USE similar_properties;

CREATE TABLE PROPERTY (
  address TEXT,
  address_id INT,
  city TEXT,
  city_id INT,
  rating DECIMAL,
  property_type TEXT,
  bed_num INT,
  description TEXT,
  price_per_night INT,
  photos LIST<TEXT>,
  PRIMARY KEY(address_id, city, rating)
);

POTENTIAL GET REQUEST
Query the database by address_id
Obtain group of properties by the same city_id
Sort by rating
Return the top 12