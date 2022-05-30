import { Client } from 'pg';
const client = new Client({
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
});

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

