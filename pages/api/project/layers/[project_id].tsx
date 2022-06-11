import pool from '../../../../sql/db';

export default function getLayers(req: any, res: any) {
  const { project_id } = req.query;
  let layers: any;
  let projectDetails: any;

  if (req.method === 'GET') {
    pool.query(`SELECT genre, name FROM projects WHERE id = ${project_id}`)
    .then((genreAndName: any) => {
      projectDetails = genreAndName.rows;
    })
    .catch((err: any) => {
      res.status(500);
    })
    .then(() => {
      pool.query(`SELECT * FROM layers WHERE project_id = ${project_id};`)
        .then((layerResults: any) => {
          layers = layerResults.rows;
          res.send({ layers, projectDetails })
        })
        .catch((err: any) => {
          res.status(500);
        })
    })


  }
}