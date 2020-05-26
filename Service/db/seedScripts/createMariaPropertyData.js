// Generates Properties
const { writeMariaPropertyData } = require('../rawData/propertyData/generatePropertyData');
const { numberOfProperties } = require('./seedParameters');

/*
Generates a txt file with 10,000,000 entries, one for each property, in the following format:

id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
location VARCHAR(25) NOT NULL
*/

writeMariaPropertyData(numberOfProperties);