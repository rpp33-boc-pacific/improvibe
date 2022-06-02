const { Pool } = require('pg');
const pool = new Pool({
  host: process.env.POSTGRES_HOST,
  database: 'improvibe',
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
});

export default pool;
