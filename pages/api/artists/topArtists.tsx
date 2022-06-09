import pool from "../../../sql/db";

export default function getTopArtists(req: any, res: any) {
  let { userId } = req.query;
  let { method } = req.method;

  // SELECT Top artists.
  // returns artists in a descending order and limits the results to 3

  // let getTopArtistsQuery = `SELECT * FROM users LIMIT 3 DESC`;

  // pool
  // .query(getTopArtistsQuery)
  // .then((res: { rows: any[]; }) => {
  //   console.log('user:', res.rows[0])
  // })
  // .catch((err: any) => {
  //   res.status(400);
  // }
  // )

  // SENDING SAMPLE DATA TO CHECK API END POINTS
  // console.log('request received')

  res.status(200).send([
    {name: 'Kendall Irwin',
    likes: 932},
    {name: 'Yvonne Lu',
    likes: 798},
    {name: 'Safiya Barnes',
    likes: 539},
    {name: 'Keon Holder',
    likes: 452},
    {name: 'Norah Mellor',
    likes: 293},
    {name: 'Cali Odonnell',
    likes: 203},
    {name: 'Aaliya Mansell',
    likes: 129},
    {name: 'Izaan John',
    likes: 100},
    {name: 'Izaan John',
    likes: 100},
  ]);
}