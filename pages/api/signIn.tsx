import client from "../../sql/db.js";
import hash from 'object-hash';
import { useSession, getSession } from "next-auth/react"

export default async function signInHandler(req, res) {
  const session = await getSession({ req });

  console.log(session)

  const hashedPassword = hash(req.body.password);
  const email = req.body.email;

  const checkUserCredentials = `SELECT email FROM users WHERE email='${email}' AND hash='${hashedPassword}'`

  client.query(checkUserCredentials)
  .then((user) => {
    if (user.rowCount === 0) {
      throw new Error('Invalid email or password', {cause: 'Your email or password is incorrect.'});
    } else {
      res.send(200);
    }
  }).catch((err) => {
    if (err.cause === 'Your email or password is incorrect.') {
      res.send(400, err.cause);
    } else {
      res.send(500, 'Error: please try again.');
    }
  });
}