import pool from "../../../../sql/db";

export default function getMetrics(req: any, res: any) {
  let {userId} = req.query;

  // Returns the genres in order of most popular
  const getMetricsQuery = `Select SUM(likes) totalLikes FROM likes WHERE id = ${userId};`

  // pool.query(getTopArtistsQuery)
  // .then((data:any) => {
  //   console.log('top genres', data)
  //   res.status(200).send(data.rows);
  // })
  // .catch((err: any) => {
  //   res.status(400);
  // });

  res.status(200).send([
    {totalLikes: '9k',
    totalShares: '8k'}
  ])
};