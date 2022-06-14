import pool from "../../../../sql/db";

export default function getAllTopSongs(req: any, res: any) {
  const { userId } = req.query;

  let getAllTopSongsQuery = `
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
    AND projects.public = true
  ORDER BY
    projects.likes DESC
  LIMIT
    20`;

  pool.query(getAllTopSongsQuery)
  .then((songs: any) => {
    res.send({ songs: songs.rows });
  })
  .catch((error: any) => {
    console.log(error)
    res.send(error);
  });
};