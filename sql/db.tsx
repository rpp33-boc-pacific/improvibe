const { Pool } = require('pg');
const pool = new Pool({
  host: process.env.POSTGRES_HOST,
  database: 'improvibe',
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
});

<<<<<<< HEAD
// const client = new Client({
//   host: 'http://ec2-3-93-190-88.compute-1.amazonaws.com/',
//   database: process.env.PGDATABASE,
//   user: pos,
//   password: process.env.PGPASSWORD,
// });

client.connect(err => {
  if (err) {
    console.error('connection error', err.stack);
  } else {
    console.log('connected', client);
  }
});

export default client;
=======
export default pool;
>>>>>>> main

