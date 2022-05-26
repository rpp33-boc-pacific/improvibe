import client from "../../sql/db.js";
import hash from 'object-hash';
import { Console } from "console";

export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' })
    return
  }

  const password = hash(req.body.password);
  const email = req.body.email;

  const checkUserExists = `SELECT email FROM users WHERE email='${email}'`
  const insertUser = `INSERT INTO users(email, hash) VALUES ('${email}', '${password}');`

  client.query(checkUserExists)
  .then((user) => {
      if (user.rowCount) {
        throw new Error('Invalid email', {cause: 'User already exists with this email address.'});
      } else {
        client.query(insertUser)
        .then(() => {
          alert('Account created. Please login.')
          res.redirect('/signIn');
        })
        .catch(() => {
          throw new Error('Internal error', {cause: 'Error: please try again.'});
        });
      }
  }).catch((err) => {
    if (err.cause === 'User already exists with this email address.') {
      res.send(400, err.cause);
    } else {
      res.send(500, 'Error: please try again.');
    }
  });
}