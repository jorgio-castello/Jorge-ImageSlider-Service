// Generates Properties
const { writeCassandraPropertyData } = require('../rawData/propertyData/generatePropertyData');
const { numberOfProperties } = require('./seedParameters');

/*
Generates a CSV file with 10M entries, one for each property, in the following format:

location TEXT,
rating DECIMAL,
property_type TEXT,
bed_num INT,
description TEXT,
price_per_night INT,
createdAt uuid,
awsBlockUrl text,
*/

writeCassandraPropertyData(numberOfProperties);