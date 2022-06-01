import pool from "../../sql/db";
import hash from 'object-hash';

export default async function loginHandler(req: any, res: any) {
  return new Promise <void>(resolve => {
    const email = req.body.email;
    const hashedPassword = hash({email: req.body.password});

    const checkUserCredentials = `SELECT email FROM users WHERE email='${email}' AND hash='${hashedPassword}'`

    pool.query(checkUserCredentials)
    .then((user: any) => {
      if (user.rowCount === 0) {
        throw new Error('Invalid email or password');
      } else {
        res.redirect('/');
      }
      return resolve();
    }).catch((err: any) => {
      if (err.message === 'Invalid email or password') {
        res.status(400).send(err.message);
      } else {
        res.send(500, 'Error: please try again.');
      }
      return resolve();
    });
  })
}