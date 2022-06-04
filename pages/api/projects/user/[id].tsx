import client from '../../../../sql/db';

export default function getProjects(req: any, res: any) {
  const userId = req.query.id
  //Select name from USER table where id = userId
  //Select project_id from projects where user_id = userId
  //For Each Layer SELECT * from LAYERS JOIN with tracks where project_id = projectId

  let example = {
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
  res.send(example)
}