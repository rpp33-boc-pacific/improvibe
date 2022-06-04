import client from '../../sql/db';

export default function alterProject(req: any, res: any) {
  let projectId;
  if (req.method === 'POST') {
    const project = req.query
    //INSERT INTO projects (name, genre_id, public, user_id, total_time, song_path, date_created) VALUES (project.name, project.genre_id, project.public, project.user_id, project.total_time, project.song_path, CURRENT_TIMESTAMP)
    projectId = 1;
    res.send(`You have created project ${projectId} in the database`);
  } else if (req.method === 'PUT') {
    //otherwise it will be a PUT request
    projectId = req.query.project_id
    const parameters = req.query
    //for each parameter update the database with it's new value
    //UPDATE parameters to value where project_id = projectId
    res.send(`You have updated project ${projectId} in the database`);
  } else {
    projectId = req.query.project_id
    //DELTE project from projects table where project_id = projectId
    res.send(`You have deleted project ${projectId} in the database`);
  }
}
