const pg = require('pg');

const client = new pg.Client('postgres://localhost:5432/weightLifter');

// client.connect();

module.exports = {
  client,
};
