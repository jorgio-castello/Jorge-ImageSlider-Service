DROP KEYSPACE IF EXISTS similar_properties;
CREATE KEYSPACE similar_properties;

USE similar_properties;

CREATE TABLE PROPERTY (
  id INT,
  host TEXT,
  location TEXT,
  rating DECIMAL,
  property_type TEXT,
  bed_num INT,
  description TEXT,
  price_per_night INT,
  PRIMARY KEY(id)
);

CREATE TABLE PHOTO (
  photoId INT,
  propertyId INT,
  src TEXT,
  PRIMARY KEY(photoId, propertyId)
);

CREATE TABLE similarProperties (
  id INT,
  propertyId INT,
  similar_property_1 INT,
  similar_property_2 INT,
  similar_property_3 INT,
  similar_property_4 INT,
  similar_property_5 INT,
  similar_property_6 INT,
  similar_property_7 INT,
  similar_property_8 INT,
  similar_property_9 INT,
  similar_property_10 INT,
  similar_property_11 INT,
  similar_property_12 INT,
  PRIMARY KEY(id, propertyId)
);
