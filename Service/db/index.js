// use 'npm pg' documentation
const { Client } = require('pg');
const { dbConfig } = require('./pg.config.js');

const client = new Client(dbConfig);

client.connect();

module.exports = client;
