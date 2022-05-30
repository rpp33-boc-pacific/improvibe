import client from "../../sql/db";
import hash from 'object-hash';

export default function signUpHandler(req: any, res: any) {
  console.log('The client', client);
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' });
    return
  } else {
    const email = req.body.email;
    const hashedPassword = hash({email: req.body.password});

    const checkUserExists = `SELECT email FROM users WHERE email='${email}'`
    const insertUser = `INSERT INTO users(email, hash) VALUES ('${email}', '${hashedPassword}');`

    client.query(checkUserExists)
    .then((user: any) => {
        if (user.rowCount !== 0) {
          throw new Error('User already exists with this email address');
        } else {
          client.query(insertUser)
          .then(() => {
            res.status(201).send('Your account has successfully been created')
          })
          .catch((err: any) => {
            throw new Error('Internal error');
          });
        }
    }).catch((err: any) => {
      if (err.message === 'User already exists with this email address') {
        res.status(400).send(err.message);
      } else {
        res.status(500).send('Error: please try again');
      }
    });
  }
}