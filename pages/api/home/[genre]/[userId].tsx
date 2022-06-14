import pool from "../../../../sql/db";

export default function getSongsInGenre(req: any, res: any) {
  const { genre, userId } = req.query;

  const getGenreQuery = `
  SELECT
    projects.id AS song_id, projects.name AS song_name, users.name AS artist_name, users.id AS artist_id, projects.genre, projects.likes AS cummulative_likes, projects.song_path, users.photo_url,
    CASE WHEN (
      SELECT
        likes.id
      FROM
        likes
      WHERE
        likes.song_id = projects.id
        AND likes.user_id = ${userId}
    ) IS NOT NULL
      THEN true
      ELSE false
    END as liked
  FROM
    projects,
    users
  WHERE
    projects.user_id = users.id
    AND projects.genre = '${genre}'
    AND projects.public = true
  ORDER BY
    projects.likes DESC
  LIMIT
    20`;

  pool.query(getGenreQuery)
  .then((songs: any) => {
    res.send({ songs: songs.rows });
  })
  .catch((error: any) => {
    console.log(error)
    res.send(error);
  });
};