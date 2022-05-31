import client from '../../../sql/db';

export default function userHandler(req: any, res: any) {
  const userId = req.query.id
  //Select id, artist, song, searched, photo url from users where id = userId
  //Select * from songs table where userId = userId
  //For each song add whether userId has liked this song and the genre associated with the genre_id
  //Select

  type songs = {};

  let fakeUser = {
    id: 9,
    artist: 'David Bowe',
    searched: 10,
    photoUrl: 'https://ychef.files.bbci.co.uk/976x549/p01j3jyb.jpg',
    songs: [
      {
        id: 1,
        name: 'Space Odity',
        songPath: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3',
        totalLikes: 14,
        liked: true,
        genre: 'Rock'
      },
      {
      id: 2,
      name: 'Golden Years',
      songPath: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-17.mp3',
      totalLikes: 21,
      liked: false,
      genre: 'Smooth Rock'
      }
    ]
  }
  res.send(fakeUser)
}


