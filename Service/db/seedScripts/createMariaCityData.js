// Generate Cities
const { createCityStringMaria } = require('../rawData/locationData/helpers/createCityString');
const { generateTxtDataForMaria } = require('../rawData/locationData/generateCityData');
const { citiesMaria } = require('./seedParameters');

/*
Generates a txt file with 10,000 entries, one for each city, in the following format:

id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
rating DECIMAL(3,2) UNSIGNED NOT NULL,
property_type VARCHAR(25) NOT NULL,
bed_num TINYINT UNSIGNED NOT NULL,
description VARCHAR(100) NOT NULL,
price_per_night SMALLINT UNSIGNED NOT NULL,
awsBlockUrl VARCHAR(100) NOT NULL,

location_id INT NOT NULL,
CONSTRAINT fk_location_id FOREIGN KEY (location_id) REFERENCES location(id)
*/

const cityStrMaria = createCityStringMaria(citiesMaria);
generateTxtDataForMaria(cityStrMaria);