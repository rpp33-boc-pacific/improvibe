import pool from '../../../../sql/db';

export default function getProjects(req: any, res: any) {
  const userId = req.query.id
  const getProjects = (`SELECT * FROM projects WHERE user_id = ${userId}`);

  // TODO: update query to include layers for each project
  pool.query(getProjects)
    .then((projects: any) => {
      // console.log(`PROJECTS RETURNED FOR USER ${userId}:`, projects);
      res.send(projects.rows);
    })
    .catch((err: any) => {
      // console.log('ERROR W DB QUERY', err);
      res.send(err);
    })
}