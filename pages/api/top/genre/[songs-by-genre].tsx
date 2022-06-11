import pool from "../../../../sql/db";

export default function getTopSongsByGenre(req: any, res: any) {
  let { genre } = req.query;
  console.log('genre', genre)

  // Returns the most popular songs by genre
  const getTopGenreSongsQuery = `SELECT * from projects where genre=${genre} ORDER BY likes DESC LIMIT 4;`

  // pool.query(getTopGenreSongsQuery)
  // .then((data:any) => {
  //   // console.log('top genre songs list', data)
  // })
  // .catch((err: any) => {
  //   res.status(400);
  // });

  const example = [
    {
      song_id: 2,
      song_name: 'Hello Again',
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