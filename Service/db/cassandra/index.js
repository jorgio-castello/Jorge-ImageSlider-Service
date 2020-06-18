const cassandra = require('cassandra-driver');

const contactPoint = process.env.seedNodeIP || '127.0.0.1';

const client = new cassandra.Client({
	contactPoints: [contactPoint],
  localDataCenter: 'datacenter1',
  keyspace: 'similar_properties',
});

module.exports = client;
