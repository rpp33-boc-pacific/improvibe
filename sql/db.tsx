import { Client } from 'pg';
const client = new Client({
  host: process.env.POSTGRES_HOST,
  database: 'improvibe',
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
});

client.connect(err => {
  if (err) {
    console.error('connection error', err.stack);
  } else {
    console.log('connected');
  }
});

export default client;

