const mariadb = require('mariadb');
const config = require('./config');

module.exports = mariadb.createPool(config);
