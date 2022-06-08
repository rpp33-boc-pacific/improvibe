import client from '../../sql/db';

export default function alterProject(req: any, res: any) {
  //TODO: Update insertSong statement to include the genre string instead of hardcoded integer once the database gets fixed
  if (req.method === 'POST') {
    let project = req.body

    const insertSong = `INSERT INTO projects (name, genre_id, likes, shares, public, user_id, song_path, date_created) VALUES ('${project.name}', 1, 0, 0, false, ${project.user_id}, '${project.song_path}', CURRENT_TIMESTAMP) RETURNING id`;

    client.query(insertSong)
    .then((result:any) => {
      res.send(result.rows[0].id);
    })
    .catch((err:any) => {
      console.log('Error inserting new song into database:', err);
    })
  } else if (req.method === 'PUT') {
    //otherwise it will be a PUT request
    let projectId = 1;
    projectId = req.query.project_id
    const parameters = req.query
    //for each parameter update the database with it's new value
    //UPDATE parameters to value where project_id = projectId
    res.send(`You have updated project ${projectId} in the database`);
  } else {
    let projectId = 1;
    projectId = req.query.project_id
    //DELTE project from projects table where project_id = projectId
    res.send(`You have deleted project ${projectId} in the database`);
  }
}
