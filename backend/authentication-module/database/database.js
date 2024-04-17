const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres', // Replace with your PostgreSQL user
  host: 'localhost', // Replace with your PostgreSQL host (e.g., localhost or a remote host)
  database: 'mdma', // Replace with your PostgreSQL database name
  password: 'admin', // Replace with your PostgreSQL password
  port: 5433, // Replace with your PostgreSQL port (default is 5432)
});

module.exports = { pool };