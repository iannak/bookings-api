const pgp = require('pg-promise')();

const db = pgp("postgres://postgres:12345@localhost:5432/bookings_api_dev");

db.query("SELECT 1 + 1 AS result").then((result) => console.log(result));

module.exports = db;
