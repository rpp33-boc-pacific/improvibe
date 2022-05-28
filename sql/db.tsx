import { Client } from 'pg';
const client = new Client({
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  // user: process.env.PGUSER,
  // password: process.env.PGDATABASE,
});

client.connect(err => {
  if (err) {
    console.error('connection error', err.stack);
  } else {
    console.log('connected');
  }
});

export default client;

