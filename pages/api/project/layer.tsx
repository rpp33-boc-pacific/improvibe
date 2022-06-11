import pool from '../../../sql/db';

export default function alterLayer(req: any, res: any) {
  if (req.method === 'POST') {
    const { name, track_time, track_path, shares, project_id, searched, tempo, pitch, volume, start_time, trim_start, trim_end, loop } = req.body;
    let sql = `INSERT INTO layers (name, track_time, track_path, shares, project_id, searched, tempo, pitch, volume, start_time, trim_start, trim_end, loop) VALUES ('${name}', ${track_time}, '${track_path}', ${shares}, ${project_id}, ${searched}, ${tempo}, ${pitch}, ${volume}, ${start_time}, ${trim_start}, ${trim_end}, ${loop}) RETURNING id`
    pool.query(sql)
    .then((results: any) => {
      res.send({ layerId: results.rows[0].id });
    })
    .catch((error: any) => {
      console.log('error posting layer');
      res.send(error);
    });
  } else if (req.method === 'PUT') {
    const { layerId, name, tempo, pitch, volume, start_time, trim_start, trim_end } = req.body;
    let sql = `UPDATE layers SET name = '${name}', tempo = ${tempo}, pitch = ${pitch}, volume = ${volume}, start_time = ${start_time}, trim_start = ${trim_start}, trim_end = ${trim_end}  WHERE id = ${layerId}`
    pool.query(sql)
    .then((results: any) => {
      res.send('success - updated layer!');
    })
    .catch((error: any) => {
      console.log('error updating layer');
      res.send(error);
    });
  } else if (req.method === 'DELETE') {
    let sql = `DELETE FROM layers WHERE name = ${req.body.name}` // TODO
    pool.query(sql)
    .then((results: any) => {
      res.send('success - deleted layer!');
    })
    .catch((error: any) => {
      console.log('error deleting layer');
      res.send(error);
    });
  }
};