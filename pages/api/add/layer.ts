import client from '../../../sql/db';

//Searching for Songs
export default function addLayer(req: any, res: any) {
  if (req.method === 'GET') {
    const id = req.query.track
    res.send(`You have submitted a new layer`)
  } else {
    res.send('Layers for current track')
  }
}