import { Client } from 'pg';
const client = new Client({
  host: process.env.PGHOST,
  database: 'improvibe',
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
});

client.connect(err => {
  if (err) {
    console.error('connection error', err.stack);
  } else {
    console.log('connected');
  }
});

export default client;

