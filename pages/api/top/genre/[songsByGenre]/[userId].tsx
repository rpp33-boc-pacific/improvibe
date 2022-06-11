import pool from "../../../../../sql/db";

export default function getTopSongsByGenre(req: any, res: any) {
  let { songsByGenre, userId } = req.query;
  // console.log('query', req.query)

  // Returns the most popular songs by genre
  const getTopGenreSongsQuery = `SELECT p.id AS song_id, p.name AS song_name, u.name AS artist_name, u.id AS artist_id, p.genre, p.likes AS cummulative_likes, p.song_path, p.photo_url FROM projects p JOIN users u ON p.id=u.id WHERE genre=${songsByGenre} ORDER BY likes DESC;`

  // pool.query(getTopGenreSongsQuery)
  // .then((data:any) => {
  //  console.log('top genre songs list', data.rows)
  // res.status(200).send(data.rows);

  // })
  // .catch((err: any) => {
  //   res.status(400);
  // });

//   SELECT OrderID, Quantity,
// CASE
//     WHEN Quantity > 30 THEN 'The quantity is greater than 30'
//     WHEN Quantity = 30 THEN 'The quantity is 30'
//     ELSE 'The quantity is under 30'
// END AS QuantityText
// FROM OrderDetails;

  const example = [
    {
      id: 2,
      name: 'Hello Again',
      artist_name: 'Caiwin',
      artist_id: 6,
      in_projects: true,
      genre: 'hip hop',
      cumulative_likes: 980,
      song_path: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
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
      song_path: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
      photo_url: 'https://footdistrict.com/media/magefan_blog/footdistrict-run-dmc-adidas-union-historica-3-1.jpg',
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
      song_path: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
      photo_url: 'https://footdistrict.com/media/magefan_blog/footdistrict-run-dmc-adidas-union-historica-3-1.jpg',
      liked: true
    },
    {
      song_id: 5,
      song_name: 'Song Name5',
      artist_name: 'Artist Name5',
      artist_id: 4,
      in_projects: true,
      genre: 'rock',
      cumulative_likes: 750,
      song_path: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
      photo_url: 'https://footdistrict.com/media/magefan_blog/footdistrict-run-dmc-adidas-union-historica-3-1.jpg',
      liked: true
    },
    {
      song_id: 7,
      song_name: 'Song Name7',
      artist_name: 'Artist Name7',
      artist_id: 4,
      in_projects: true,
      genre: 'rock',
      cumulative_likes: 640,
      song_path: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
      photo_url: 'https://footdistrict.com/media/magefan_blog/footdistrict-run-dmc-adidas-union-historica-3-1.jpg',
      liked: true
    },
    {
      song_id: 6,
      song_name: 'Song Name6',
      artist_name: 'Artist Name6',
      artist_id: 2,
      in_projects: true,
      genre: 'rock',
      cumulative_likes: 500,
      song_path: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
      photo_url: 'https://footdistrict.com/media/magefan_blog/footdistrict-run-dmc-adidas-union-historica-3-1.jpg',
      liked: true
    },
    {
      song_id: 8,
      song_name: 'Song Name8',
      artist_name: 'Artist Name8',
      artist_id: 1,
      in_projects: true,
      genre: 'rock',
      cumulative_likes: 300,
      song_path: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
      photo_url: 'https://footdistrict.com/media/magefan_blog/footdistrict-run-dmc-adidas-union-historica-3-1.jpg',
      liked: true
    },
    {
      song_id: 9,
      song_name: 'Song Name9',
      artist_name: 'Artist Name9',
      artist_id: 9,
      in_projects: false,
      genre: 'rock',
      cumulative_likes: 220,
      song_path: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
      photo_url: 'https://footdistrict.com/media/magefan_blog/footdistrict-run-dmc-adidas-union-historica-3-1.jpg',
      liked: true
    },
  ]
  res.send(example);
};