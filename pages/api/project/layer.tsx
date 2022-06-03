import client from '../../../sql/db';

export default function alterLayer(req: any, res: any) {
  let layerId;
  if (req.method === 'POST') {
    const project = req.query
    //INSERT INTO layers (name, track_id, tempo, pitch, volume, start_time, trim_start, trim_end) VALUES (layer.name, layer.track_id, layer.tempo, layer.pitch, layer.volume, layer.start_time, layer.trim_start, layer.trim_end)
    layerId = 1;
    res.send(`The layer id is ${layerId}`);
  } else if (req.method === 'PUT' ){
    //otherwise it will be a PUT request
    layerId = req.query.layer_id
    if (!layerId) {
      res.send(`Please specify a layer id and at least one parameter to change`);
    } else {
      const parameters = req.query
      //for each parameter update the database with it's new value
      //UPDATE parameters to value where layer_id = layerId
      res.send(`You have updated layer ${layerId}`);
    }
  }
};