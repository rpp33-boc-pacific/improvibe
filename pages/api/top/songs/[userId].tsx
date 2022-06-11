import pool from "../../../../sql/db";

export default function getTopSongsForUser(req: any, res: any) {
  let { userId } = req.query;

  //Returns the most liked songs for a given user
  let getTopSongsForUserQuery = `SELECT * from projects WHERE user_id=${userId} ORDER BY likes DESC LIMIT 3;`

  // pool
  // .query(getTopSongsForUserQuery)
  // .then((data: any) => {
  //   console.log('user:', data.rows);
  //   res.status(200).send(data);
  // })
  // .catch((err: any) => {
  //   res.status(400).send(err);
  // }
  // )

  // // Send Back Sample Data
  res.status(200).send([
    {
      song_id: 2,
      song_name: 'Song Name2',
      artist_name: 'Artist Name2',
      artist_id: 6,
      in_projects: true,
      genre: 'hip hop',
      cumulative_likes: 980,
      photo_url: 'https://footdistrict.com/media/magefan_blog/footdistrict-run-dmc-adidas-union-historica-3-1.jpg',
      liked: true
    },
    {
      song_id: 1,
      song_name: 'Song Name1',
      artist_name: 'Artist Name1',
      artist_id: 6,
      in_projects: false,
      genre: 'rock',
      cumulative_likes: 934,
      photo_url: 'https://ychef.files.bbci.co.uk/976x549/p01j3jyb.jpg',
      liked: true
    },
    {
      song_id: 3,
      song_name: 'Song Name3',
      artist_name: 'Artist Name3',
      artist_id: 6,
      in_projects: false,
      genre: 'rock',
      cumulative_likes: 900,
      photo_url: 'https://ychef.files.bbci.co.uk/976x549/p01j3jyb.jpg',
      liked: true
    }
  ]);
}