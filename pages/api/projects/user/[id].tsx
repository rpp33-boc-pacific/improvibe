import pool from '../../../../sql/db';

export default function getProjects(req: any, res: any) {
  if (req.method === 'GET') {
    const userId = req.query.id
    const getProjects = (`SELECT * FROM projects WHERE user_id = ${userId} ORDER BY id`);

    pool.query(getProjects)
      .then((projects: any) => {
        res.send({ songs: projects.rows });
      })
      .catch((err: any) => {
        res.send(err);
      })
  }
}