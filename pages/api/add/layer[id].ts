import client from '../../../sql/db';

//Searching for Songs
export default function addLayer(req: any, res: any) {
  if (req.method === 'POST') {
    const id = req.query.track
    res.send(`You have submitted a new layer`)
  } else {
    const layer = {
      id: 1,
      track_id: 1,
      project_id: 1,
      shares: 5,
      searched: false,
      name: 'a layer',
      tempo: 86,
      pitch: 16,
      volume: 80,
      start_time: 0,
      end_time: 100,
      loop: false
    }
    res.send(layer)
  }
}