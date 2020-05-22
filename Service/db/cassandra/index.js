const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
  contactPoints: ['127.0.0.1'],
  keyspace: 'similar_properties',
  localDataCenter: 'datacenter1'
});

console.log(client);

// const query = 'insert into locations (address_id, location) values(?,?)';
// const params = [1, "Los Angeles"];

// client.execute(query, params, { prepare: true }, err => {
//   if (err) {
//     throw new Error(err);
//   } else {
//     console.log('Successfully inserted...');
//   }
// });