import pool from "../../../../sql/db";

export default function getTopSongsForUser(req: any, res: any) {
  let { userId } = req.query;

  //Returns the most liked songs for a given user
  let getTopSongsForUserQuery = `SELECT p.id AS song_id, p.name AS song_name, u.name AS artist_name, u.id AS artist_id, p.genre, p.likes AS cummulative_likes, p.song_path, p.photo_url, FROM projects p JOIN users u ON p.id=u.id WHERE user_id=${userId} ORDER BY likes DESC LIMIT 3;`
  // pool
  // .query(getTopSongsForUserQuery)
  // .then((data: any) => {
  //   console.log('user:', data.rows);
  //   res.status(200).send(data.rows);
  // })
  // .catch((err: any) => {
  //   res.status(400).send(err);
  // }
  // )

  // // Send Back Sample Data
  const example = [
    {
      song_id: 2,
      song_name: 'Hello Again',
      artist_name: 'Norah Mellor',
      artist_id: 6,
      in_projects: true,
      genre: 'hip-hop',
      cumulative_likes: 980,
      song_path: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      photo_url: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YWxidW1zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      liked: false
    },
    {
      song_id: 1,
      song_name: 'Heavy Feather',
      artist_name: 'Norah Mellor',
      artist_id: 6,
      in_projects: false,
      genre: 'country',
      cumulative_likes: 934,
      song_path: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
      photo_url: 'https://images.unsplash.com/photo-1502773860571-211a597d6e4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGFsYnVtc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      liked: true
    },
    {
      song_id: 3,
      song_name: 'Driver',
      artist_name: 'Norah Mellor',
      artist_id: 6,
      in_projects: false,
      genre: 'country',
      cumulative_likes: 900,
      song_path: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
      photo_url: 'https://images.unsplash.com/photo-1629923759854-156b88c433aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGFsYnVtc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      liked: false
    }
  ]
  res.send(example);
}