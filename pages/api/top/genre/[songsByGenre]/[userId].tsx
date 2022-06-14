import pool from "../../../../../sql/db";

export default function getTopSongsByGenre(req: any, res: any) {
  let { songsByGenre, userId } = req.query;
  // console.log('query', req.query)

  // Returns the most popular songs by genre
  const getTopGenreSongsQuery = `SELECT p.id AS song_id, p.name AS song_name, u.name AS artist_name, u.id AS artist_id, p.genre, p.likes AS cummulative_likes, p.song_path, p.photo_url FROM projects p JOIN users u ON p.user_id=u.id WHERE genre=${songsByGenre} ORDER BY likes DESC;`

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
      sond_id: 9,
      song_name: 'Drive Of A Chance',
      artist_name: 'Rosalie Rodriguez',
      artist_id: 6,
      in_projects: true,
      genre: 'hip-hop',
      cumulative_likes: 980,
      song_path: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
      photo_url: 'https://images.unsplash.com/photo-1504898770365-14faca6a7320?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fG11c2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      liked: true
    },
    {
      song_id: 10,
      song_name: 'Home Of His Temptations',
      artist_name: 'Kate Gardner',
      artist_id: 6,
      in_projects: false,
      genre: 'electronic',
      cumulative_likes: 880,
      song_path: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
      photo_url: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fG11c2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      liked: true
    },
    {
      song_id: 11,
      song_name: 'Lost And Ways',
      artist_name: 'Willis Wood',
      artist_id: 6,
      in_projects: false,
      genre: 'hip-hip',
      cumulative_likes: 820,
      song_path: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3',
      photo_url: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fG11c2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      liked: true
    },
    {
      song_id: 19,
      song_name: 'Freedom And Miracles',
      artist_name: 'Byron Hughes',
      artist_id: 4,
      in_projects: true,
      genre: 'pop',
      cumulative_likes: 610,
      song_path: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3',
      photo_url: 'https://images.unsplash.com/photo-1488376739361-ed24c9beb6d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fG11c2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      liked: true
    },
    {
      song_id: 14,
      song_name: 'Honey, Lets Go',
      artist_name: 'Roosevelt Cooper',
      artist_id: 4,
      in_projects: true,
      genre: 'rock',
      cumulative_likes: 550,
      song_path: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3',
      photo_url: 'https://images.unsplash.com/photo-1524650359799-842906ca1c06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fG11c2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      liked: false
    },
    {
      song_id: 15,
      song_name: 'Bring It On',
      artist_name: 'June Jefferson',
      artist_id: 2,
      in_projects: true,
      genre: 'country',
      cumulative_likes: 340,
      song_path: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3',
      photo_url: 'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG11c2ljJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      liked: false
    },
    {
      song_id: 16,
      song_name: 'Time For That Riches',
      artist_name: 'Jacquelyn Barber',
      artist_id: 1,
      in_projects: true,
      genre: 'rock',
      cumulative_likes: 250,
      song_path: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3',
      photo_url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWMlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      liked: true
    },
    {
      song_id: 17,
      song_name: ' Forsaken And Life',
      artist_name: 'Wendell Warren',
      artist_id: 9,
      in_projects: false,
      genre: 'pop',
      cumulative_likes: 100,
      song_path: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3',
      photo_url: 'https://images.unsplash.com/photo-1565932887479-b18108f07ffd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG11c2ljJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      liked: true
    },
  ]

  function shuffle(array: any[]) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  let shuffledArray = shuffle(example);
  res.send(shuffledArray);
};