module.exports = {
  dbConfig: {
    user: process.env.user || 'postgres',
    password: process.env.password || 'postgres',
    host: process.env.host || '127.0.0.1',
    database: process.env.db || 'airbnb_mhyml',
    port: process.env.port || 5432
  }
}