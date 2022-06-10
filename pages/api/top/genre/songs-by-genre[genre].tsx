import pool from "../../../sql/db";

export default function getTopSongsByGenre(req: any, res: any) {
  let { genre } = req.query;

  // Returns the genres in order of most popular
  const getTopGenreSongsQuery = `SELECT * from projects where genre=${genre} ORDER BY likes DESC LIMIT 4;`

  pool.query(getTopGenreSongsQuery)
  .then((data:any) => {
    console.log('top genre songs list', data)
  })
  .catch((err: any) => {
    res.status(400);
  });
};