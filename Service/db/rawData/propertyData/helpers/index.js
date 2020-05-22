const faker = require('faker');

// This is a helper function occasionally used to generate a random number between two numbers
const generateRandomNumber = (min, max) => faker.random.number({ min, max });

// Generates a single random property type for entry into the db
const generatePropertyType = () => faker.random.arrayElement(['Home', 'Apartment', 'Room', 'Townhouse', 'Guesthouse', 'GuestSuite', 'Hotel Room', 'Penthouse', 'Resort', 'Urban Cabin']);

// This object has a number of properties, each of which dictates the number a property should have
const numberOfBeds = {
  Home:             () => generateRandomNumber(2, 5),
  Apartment:        () => generateRandomNumber(2, 5),
  Townhouse:        () => generateRandomNumber(2, 4),
  Guesthouse:       () => generateRandomNumber(1, 2),
  GuestSuite:       () => generateRandomNumber(1, 3),
  Penthouse:        () => generateRandomNumber(2, 8),
  Resort:           () => generateRandomNumber(4, 12),
  'Urban Cabin':    () => generateRandomNumber(2, 4),
  Room:             () => 1,
  'Hotel Room':     () => 1
};

// This object has a number of properties, each of which dictates the price of a room for a property
const priceByPropertyPerRoom = {
  Home:             () => generateRandomNumber(53, 104),
  Apartment:        () => generateRandomNumber(43, 74),
  Room:             () => generateRandomNumber(63, 174),
  Townhouse:        () => generateRandomNumber(33, 74),
  Guesthouse:       () => generateRandomNumber(33, 64),
  GuestSuite:       () => generateRandomNumber(63, 124),
  Penthouse:        () => generateRandomNumber(123, 254),
  Resort:           () => generateRandomNumber(203, 504),
  'Urban Cabin':    () => generateRandomNumber(73, 174),
  'Hotel Room':     () => generateRandomNumber(85, 250)
};

// This function generates a random string of words to use as the description for the property
const generateDescription = () => faker.lorem.words();

module.exports.generatePropertyType = generatePropertyType;
module.exports.numberOfBeds = numberOfBeds;
module.exports.priceByPropertyPerRoom = priceByPropertyPerRoom;
module.exports.generateDescription = generateDescription;
module.exports.generateRandomNumber = generateRandomNumber;
