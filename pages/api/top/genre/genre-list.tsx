import pool from "../../../../sql/db";

export default function getTopGenre(req: any, res: any) {

  // Returns the genres in order of most popular
  const getTopArtistsQuery = `Select genre, SUM(likes) totalLikes FROM projects GROUP BY genre ORDER BY totalLikes DESC;`

  // pool.query(getTopArtistsQuery)
  // .then((data:any) => {
  //   console.log('top genres', data)
  //   res.status(200).send(data.rows);
  // })
  // .catch((err: any) => {
  //   res.status(400);
  // });

  res.status(200).send([
    {genre: 'Rock',
    totalLikes: 1000},
    {genre: 'Country',
    totalLikes: 946},
    {genre: 'Hip-Hop',
    totalLikes: 835},
    {genre: 'Pop',
    totalLikes: 465},
    {genre: 'Electronic',
    totalLikes: 239},
  ])
};