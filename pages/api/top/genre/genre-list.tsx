import pool from "../../../../sql/db";

export default function getTopGenre(req: any, res: any) {
  let { genre } = req.query;

  // Returns the genres in order of most popular
  const getTopArtistsQuery = `Select genre, SUM(likes) totalLikes FROM projects GROUP BY genre ORDER BY totalLikes DESC;`

  pool.query(getTopArtistsQuery)
  .then((data:any) => {
    console.log('top genres', data)
  })
  .catch((err: any) => {
    res.status(400);
  });
};