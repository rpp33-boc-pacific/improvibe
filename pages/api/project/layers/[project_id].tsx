import pool from '../../../../sql/db';

export default function getLayers(req: any, res: any) {
  const projectId = req.query.project_id
  console.log('PROJECT ID', projectId);
  const getLayers = `SELECT * FROM layers WHERE project_id = ${projectId}`;

  if (req.method === 'GET') {
    pool.query(getLayers)
      .then((layers: any) => {
        // console.log(`PROJECTS RETURNED FOR USER ${userId}:`, projects);
        res.send(layers.rows);
      })
      .catch((err: any) => {
        // console.log('ERROR W DB QUERY', err);
        res.send(err);
      })
  }

  if (req.method === 'POST') {
    const layerData = req.data
    const saveLayer = `INSERT INTO layers (${layerData})`
    pool.query(saveLayer)
      .then((res: any) => {
        res.status(200);
      })
      .catch((err: any) => {
        res.status(500);
      })
  }

}