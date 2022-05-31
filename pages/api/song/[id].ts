import client from '../../../sql/db';

export default function audioEditorHandler(req: any, res: any) {
  const userId = req.query.id
  //Select id, artist, song, searched, photo url from users where id = userId
  //Select * from songs table where userId = userId
  //For each song add whether userId has liked this song and the genre associated with the genre_id
  //Select

  type song = {};
  let fakeSong= {
    artist: 'Joe Casey',
    song: {
      tracks: {
        1: {
          track_path: '',
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
          track_path: '',
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
  }
  res.send(fakeSong)
}