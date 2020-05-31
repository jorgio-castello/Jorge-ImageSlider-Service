const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
  contactPoints: ['0.0.0.0'],
  keyspace: 'similar_properties',
  localDataCenter: 'datacenter1',
});

module.exports = client;
