import pool from '../../../../sql/db';

export default function getLayers(req: any, res: any) {
  const projectId = req.query.project_id;
  let layers: any;
  let projectDetails: any;


  if (req.method === 'GET') {
    pool.query(`SELECT genre, name FROM projects WHERE id =${projectId}`)
    .then((genreAndName: any) => {
      console.log(`NAME AND GENRE RETURNED FOR PROJECT ${projectId}:`, genreAndName);
      projectDetails = genreAndName.rows;
    })
    .catch((err: any) => {
      console.log('ERROR W DB QUERY', err);
      res.status(500);
    })
    .then(() => {
      pool.query(`SELECT * FROM layers WHERE project_id = ${projectId};`)
        .then((layerResults: any) => {
          console.log(`LAYERS RETURNED FOR PROJECT ${projectId}:`, layerResults);
          // res.send(layers.rows);
          layers = layerResults.rows;
          res.send({layers: layers, projectDetails: projectDetails})
        })
        .catch((err: any) => {
          console.log('ERROR W DB QUERY', err);
          res.status(500);
        })
    })


  }
}