import client from "../../sql/db";
import hash from 'object-hash';

export default function signUpHandler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' });
    return
  } else {
    const password = hash(req.body.password);
    const email = req.body.email;

    const checkUserExists = `SELECT email FROM users WHERE email='${email}'`
    const insertUser = `INSERT INTO users(email, hash) VALUES ('${email}', '${password}');`

    client.query(checkUserExists)
    .then((user) => {
        if (user.rowCount !== 0) {
          throw new Error('User already exists with this email address');
        } else {
          client.query(insertUser)
          .then(() => {
            res.status(201).send('Your account has successfully been created')
          })
          .catch((err) => {
            throw new Error('Internal error');
          });
        }
    }).catch((err) => {
      console.log(err.message)
      if (err.message === 'User already exists with this email address') {
        res.status(400).send('User already exists with this email address');
      } else {
        res.status(500).send('Error: please try again.');
      }
    });
  }
}