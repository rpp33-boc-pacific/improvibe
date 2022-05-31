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
    song: 'Space Odity',
    searched: 10,
    photoUrl: 'https://ychef.files.bbci.co.uk/976x549/p01j3jyb.jpg',
    songs: {
      1: {
      songPath: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3',
      liked: true,
      totalLikes: 14,
      genre: 'Rock'
      },
      2: {
      songPath: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3',
      liked: true,
      totalLikes: 14,
      genre: 'Rock'
      }
    }
  }
  res.send(fakeUser)
}