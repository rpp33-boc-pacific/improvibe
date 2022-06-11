import pool from '../../../../sql/db';

export default function getLayers(req: any, res: any) {
  const projectId = req.query.project_id;

  if (req.method === 'GET') {
    pool.query(`SELECT * FROM layers WHERE project_id = ${projectId};`)
      .then((layers: any) => {
        console.log(`LAYERS RETURNED FOR PROJECT ${projectId}:`, layers);
        res.send(layers.rows);
      })
      .catch((err: any) => {
        console.log('ERROR W DB QUERY', err);
        res.status(500);
      })
  }
}