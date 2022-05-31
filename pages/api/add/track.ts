import client from '../../../sql/db';

//Searching for Songs
export default function addTrack(req: any, res: any) {
  if (req.method === 'POST') {
    const id = req.query.track
    res.send(`You have submitted a new track`)
  } else {
    const track = {
      id: 1,
      name: 'a track',
      track_path: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
      date_created: new Date(),
      searched: false
    }
    res.send(track)
  }
}