import pool from '../../../sql/db';
// import pool from '../../../local/localdb';

// pool.connect((err: { stack: any }) => {
//   if (err) {
//     return console.error('Error acquiring client', err.stack)
//   }
//   console.log('connected to db');
// })

export default function highestRankingBy(req: any, res: any) {

  //SELECT count number of songs from the given category sorted by highest
  const example = [
    {
      song_id: 2,
      song_name: 'Hello Again',
      artist_name: 'Caiwin',
      artist_id: 6,
      in_projects: true,
      genre: 'hip hop',
      cumulative_likes: 980,
      photo_url: 'https://footdistrict.com/media/magefan_blog/footdistrict-run-dmc-adidas-union-historica-3-1.jpg',
      liked: false
    },
    {
      song_id: 1,
      song_name: 'Song Name1',
      artist_name: 'Artist Name1',
      artist_id: 6,
      in_projects: false,
      genre: 'rock',
      cumulative_likes: 934,
      photo_url: 'https://footdistrict.com/media/magefan_blog/footdistrict-run-dmc-adidas-union-historica-3-1.jpg',
      liked: false
    },
    {
      song_id: 3,
      song_name: 'Song Name3',
      artist_name: 'Artist Name3',
      artist_id: 6,
      in_projects: false,
      genre: 'rock',
      cumulative_likes: 900,
      photo_url: 'https://footdistrict.com/media/magefan_blog/footdistrict-run-dmc-adidas-union-historica-3-1.jpg',
      liked: false
    },
    {
      song_id: 5,
      song_name: 'Song Name5',
      artist_name: 'Artist Name5',
      artist_id: 4,
      in_projects: true,
      genre: 'rock',
      cumulative_likes: 750,
      photo_url: 'https://footdistrict.com/media/magefan_blog/footdistrict-run-dmc-adidas-union-historica-3-1.jpg',
      liked: false
    },
    {
      song_id: 7,
      song_name: 'Song Name7',
      artist_name: 'Artist Name7',
      artist_id: 4,
      in_projects: true,
      genre: 'rock',
      cumulative_likes: 640,
      photo_url: 'https://footdistrict.com/media/magefan_blog/footdistrict-run-dmc-adidas-union-historica-3-1.jpg',
      liked: false
    },
    {
      song_id: 6,
      song_name: 'Song Name6',
      artist_name: 'Artist Name6',
      artist_id: 2,
      in_projects: true,
      genre: 'rock',
      cumulative_likes: 500,
      photo_url: 'https://footdistrict.com/media/magefan_blog/footdistrict-run-dmc-adidas-union-historica-3-1.jpg',
      liked: false
    },
    {
      song_id: 8,
      song_name: 'Song Name8',
      artist_name: 'Artist Name8',
      artist_id: 1,
      in_projects: true,
      genre: 'rock',
      cumulative_likes: 300,
      photo_url: 'https://footdistrict.com/media/magefan_blog/footdistrict-run-dmc-adidas-union-historica-3-1.jpg',
      liked: false
    },
    {
      song_id: 9,
      song_name: 'Song Name9',
      artist_name: 'Artist Name9',
      artist_id: 9,
      in_projects: false,
      genre: 'rock',
      cumulative_likes: 220,
      photo_url: 'https://footdistrict.com/media/magefan_blog/footdistrict-run-dmc-adidas-union-historica-3-1.jpg',
      liked: false
    },
  ]
    res.send(example);
};



