const pgp = require('pg-promise')();

const db = pgp({
  user: 'postgres',
  password: '10072304',
  host: 'localhost',
  port: 5432,
  database: 'apiBlogNodejsExpress'
});

module.exports = db;
