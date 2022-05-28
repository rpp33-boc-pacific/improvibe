import client from "../../sql/db.js";
import hash from 'object-hash';

export default function signUpHandler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' })
    return
  } else {
    const password = hash(req.body.password);
    const email = req.body.email;

    const checkUserExists = `SELECT email FROM users WHERE email='${email}'`
    const insertUser = `INSERT INTO users(email, hash) VALUES ('${email}', '${password}');`

    client.query(checkUserExists)
    .then((user) => {
        if (user.rowCount === 0) {
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

}