import pool from "../../../sql/db";

export default function logInHandler(req: any, res: any) {

  return new Promise <void>((resolve) => {
    if (req.method !== 'POST') {
      res.status(405).send({ message: 'Only POST requests allowed' });
      return;
    } else {

      const email =req.body.user.email;
      let user;

      const checkUserCredentials = `SELECT * FROM users WHERE email='${email}'`;
      return pool.query(checkUserCredentials)
      .then((loggedInUser: any) => {
        if (loggedInUser.rowCount === 0) {
          const addUser = `INSERT INTO users(email) VALUES ('${email}')`
          pool.query(addUser)
          .then((user: any) =>{
            user = user;
          })
        }
        user = loggedInUser.rows[0];
        delete user.hash;
        res.status(201).send(user);
        return resolve();
      })
    }
  })
}