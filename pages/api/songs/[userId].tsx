import pool from "../../../sql/db";

export default function getTopSongsForUser(req: any, res: any) {
  let { userId } = req.query;
  let { method } = req.method;

  // SELECT all project where user_id matches the userId in query.
  // Filters out only 'public' songs in a descending order and limits the results to 3

  // let getTopSongsQuery = `SELECT * FROM projects WHERE user_id = ${userId} AND public = true LIMIT 3 DESC`;

  // pool
  // .query(getTopSongsQuery)
  // .then((res: { rows: any[]; }) => {
  //   console.log('user:', res.rows[0])
  // })
  // .catch((err: any) => {
  //   res.status(400);
  // }
  // )

  // SENDING SAMPLE DATA TO CHECK API END POINTS
  console.log('request received')

  res.status(200).send([
    {name: 'Time For Broken Dreams',
    likes: 840},
    {name: 'Driver',
    likes: 730},
    {name: 'Heavy Feather',
    likes: 139},
    {name: 'I Found My Passion',
    likes: 230},
    {name: 'Earning Streets',
    likes: 190},
    {name: 'All In Heart',
    likes: 80},
    {name: 'Let Me Know',
    likes: 10},
    {name: 'It Will Take a Liftime',
    likes: 60},
  ]);
}