import pool from '../../../sql/db';

export default function alterProject(req: any, res: any) {
  if (req.method === 'POST') {
    const { name, genre, likes, shares, publicStatus, user_id, searched, total_time, song_path, date_created } = req.body;
    console.log(req.body);
    let sql = `INSERT INTO projects (name, genre, likes, shares, public, user_id, searched, total_time, song_path, date_created) VALUES ('${name}', '${genre}', ${likes}, ${shares}, ${publicStatus}, ${user_id}, ${searched}, ${total_time}, '${song_path}', ${date_created}) RETURNING id`
    pool.query(sql)
    .then((results: any) => {
      res.send({ projectId: results.rows[0].id });
    })
    .catch((error: any) => {
      console.log('error posting project');
      res.send(error);
    });
  } else if (req.method === 'PUT') {
    const { id, name, genre, song_path } = req.body;
    let sql = `UPDATE projects SET name = '${name}', genre = '${genre}', song_path = '${song_path}' WHERE id = ${id}`
    pool.query(sql)
    .then((results: any) => {
      res.send('success - updated layer!');
    })
    .catch((error: any) => {
      console.log('error updating layer');
      res.send(error);
    });
  } else if (req.method === 'GET') {
    const { projectId } = req.query;
    let sql = `SELECT * FROM projects WHERE id = ${projectId}`;
    pool.query(sql)
    .then((results: any) => {
      res.send({ user_id: results.rows[0].user_id});
    })
    .catch((error: any) => {
      console.log('error getting project');
      res.send(error);
    });
  }
};