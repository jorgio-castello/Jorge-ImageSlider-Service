const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
	contactPoints: ['18.236.134.175'],
  localDataCenter: 'datacenter1',
  keyspace: 'similar_properties',
});

module.exports = client;
