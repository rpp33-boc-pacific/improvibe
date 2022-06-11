import pool from "../../../../sql/db";

export default function getAllTopSongs(req: any, res: any) {
  //Returns most liked songs
  let {userId} = req.query;
  // console.log('query', userId)
  let getAllTopSongsQuery = `SELECT p.id AS song_id, p.name AS song_name, u.name AS artist_name, u.id AS artist_id, p.genre, p.likes AS cummulative_likes, p.song_path, p.photo_url, FROM projects p JOIN users u ON p.user_id=u.id;`

  // pool
  // .query(getAllTopSongsQuery)
  // .then((data: any) => {
  //   //Uncomment this when example is no longer being sent back
  //   console.log('top songs:', data.rows);
  //   res.status(200).send(data.rows);
  // })
  // .catch((err: any) => {
  //   res.status(400).send(err);
  // }
  // )
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
      artist_name: 'Izaan John',
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
      artist_name: 'Safiya Barnes',
      artist_id: 6,
      in_projects: false,
      genre: 'country',
      cumulative_likes: 900,
      song_path: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
      photo_url: 'https://images.unsplash.com/photo-1629923759854-156b88c433aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGFsYnVtc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      liked: false
    },
    {
      song_id: 5,
      song_name: 'Earning Streets',
      artist_name: 'Kendall Irwin',
      artist_id: 4,
      in_projects: true,
      genre: 'pop',
      cumulative_likes: 750,
      song_path: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
      photo_url: 'https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bXVzaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      liked: true
    },
    {
      song_id: 7,
      song_name: 'All In Heart',
      artist_name: 'Keon Holder',
      artist_id: 4,
      in_projects: true,
      genre: 'rock',
      cumulative_likes: 640,
      song_path: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
      photo_url: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG11c2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      liked: true
    },
    {
      song_id: 6,
      song_name: 'I Found My Passion',
      artist_name: 'Cali Odonnell',
      artist_id: 2,
      in_projects: true,
      genre: 'rock',
      cumulative_likes: 500,
      song_path: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
      photo_url: 'https://images.unsplash.com/photo-1433622070098-754fdf81c929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fG11c2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      liked: true
    },
    {
      song_id: 8,
      song_name: 'Let Me Know',
      artist_name: 'Yvonne Lu',
      artist_id: 1,
      in_projects: true,
      genre: 'hip-hop',
      cumulative_likes: 300,
      song_path: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
      photo_url: 'https://images.unsplash.com/photo-1445375011782-2384686778a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fG11c2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      liked: false
    },
    {
      song_id: 9,
      song_name: 'It Will Take a Liftime',
      artist_name: 'Izaan John',
      artist_id: 9,
      in_projects: false,
      genre: 'hip-hop',
      cumulative_likes: 220,
      song_path: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
      photo_url: 'https://images.unsplash.com/photo-1501612780327-45045538702b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fG11c2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      liked: false
    },
  ]
  res.send(example);


};