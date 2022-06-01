import client from '../../../sql/db';

export default function audioEditorHandler(req: any, res: any) {
  const userId = req.query.id
  //Select id, artist, song, searched, photo url from users where id = userId
  //Select * from songs table where userId = userId
  //For each song add whether userId has liked this song and the genre associated with the genre_id
  //Select

  type song = {};
  let fakeSong = {
    artist: 'Fakey McFake',
    songs: [{
      song: {
        tracks: {
          1: {
            track_path: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
            layers: {
              1: {
              tempo: 86,
              pitch: 16,
              volume: 80,
              start_time: 0,
              end_time: 100,
              loop: false
              },
              2: {
              tempo: 90,
              pitch: 10,
              volume: 70,
              start_time: 0,
              end_time: 60,
              loop: false
              }
            }
          },
          2: {
            track_path: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
            layers: {
              1: {
              tempo: 78,
              pitch: 14,
              volume: 50,
              start_time: 0,
              end_time: 90,
              loop: true
              }
            }
          }
        }
      }
    }, {
      song: {
        tracks: {
          1: {
            track_path: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3',
            layers: {
              1: {
              tempo: 86,
              pitch: 16,
              volume: 80,
              start_time: 0,
              end_time: 100,
              loop: false
              }
            }
          },
          2: {
            track_path: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3',
            layers: {
              1: {
              tempo: 86,
              pitch: 16,
              volume: 80,
              start_time: 0,
              end_time: 100,
              loop: false
              }
            }
          }
        }
      }
    }]
  }
  res.send(fakeSong)
}


