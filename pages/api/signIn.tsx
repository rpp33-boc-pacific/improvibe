import client from "../../sql/db";
import hash from 'object-hash';
import { useSession, getSession } from "next-auth/react"

export default async function signInHandler(req: any, res: any) {
  const hashedPassword = hash(req.body.password);
  const email = req.body.email;

  const checkUserCredentials = `SELECT email FROM users WHERE email='${email}' AND hash='${hashedPassword}'`

  client.query(checkUserCredentials)
  .then((user) => {
    if (user.rowCount === 0) {
      throw new Error('Invalid email or password');
    } else {
      res.send(200);
    }
  }).catch((err) => {
    if (err.message === 'Invalid email or password') {
      res.status(400).send(err.message);
    } else {
      res.send(500, 'Error: please try again.');
    }
  });
}