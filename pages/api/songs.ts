import client from '../../sql/db';

//only for get requests
export default function userHandler(req: any, res: any) {
  const query = req.query.search

  // const userQuery = `SELECT * FROM users WHERE id='${userId}'`

  // client.query(userQuery)
  // .then((user: any) => {
  //   console.log('results from query', user);
  //   res.send(user);
  // })
  // .catch((err:any) => {
  //   res.status(500).send(err);
  // });
  res.send(`You have searched for ${query}`)
}