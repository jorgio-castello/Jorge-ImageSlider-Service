DROP DATABASE IF EXISTS similar_properties;
CREATE DATABASE similar_properties;

USE similar_properties;

SET FOREIGN_KEY_CHECKS = 0;

-- This will represent the cities presented for a recommended home
CREATE TABLE LOCATION (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  location VARCHAR(25) NOT NULL
);

CREATE TABLE PROPERTY (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  rating DECIMAL(3,2) UNSIGNED NOT NULL,
  property_type VARCHAR(25) NOT NULL,
  bed_num TINYINT UNSIGNED NOT NULL,
  description VARCHAR(100) NOT NULL,
  price_per_night SMALLINT UNSIGNED NOT NULL,
  awsBlockUrl VARCHAR(100) NOT NULL,

  location_id INT NOT NULL,
  CONSTRAINT fk_location_id FOREIGN KEY (location_id) REFERENCES location(id)
);

LOAD DATA INFILE '/Users/jorgecastello/Code/HackReactor/capstones/SDC/work/ImageService/Service/db/rawData/locationData/MariaCityData.txt' INTO TABLE LOCATION FIELDS TERMINATED BY ',';

LOAD DATA INFILE '/Users/jorgecastello/Code/HackReactor/capstones/SDC/work/ImageService/Service/db/rawData/propertyData/MariaPropertyData.txt' INTO TABLE PROPERTY FIELDS TERMINATED BY ',';