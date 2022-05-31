import client from "../../sql/db";
import hash from 'object-hash';

export default async function loginHandler(req:any, res:any) {
  console.log('the request from the front end', req.body)
  const email = req.body.email;
  const hashedPassword = hash({email: req.body.password});

  const checkUserCredentials = `SELECT id FROM users WHERE email='${email}' AND hash='${hashedPassword}'`

  client.query(checkUserCredentials)
  .then((user: any) => {
    console.log('user', user.rows[0])
    if (user.rowCount === 0) {
      throw new Error('Invalid email or password');
    } else {
      res.status(201).json(user.rows);
    }
  }).catch((err: any) => {
    if (err.message === 'Invalid email or password') {
      res.status(400).send(err.message);
    } else {
      res.send(500, 'Error: please try again.');
    }
  });
}