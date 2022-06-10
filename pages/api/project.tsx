import client from '../../sql/db';

export default function alterProject(req: any, res: any) {
  //TODO: Update insertSong statement to include the genre string instead of hardcoded integer once the database gets fixed

  // client.query(`INSERT INTO projects (name, genre, likes, shares, public, user_id, song_path, date_created) VALUES ('Time', 'rock', 52, 26, true, 4, 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3', CURRENT_TIMESTAMP) RETURNING id`)
  // client.query(`INSERT INTO users (id, name, email, about_me, searched, photo_url) VALUES(4,'Eddie', 'Eddie@gmail', 'I am Eddie', 4, 'https://images.unsplash.com/photo-1539125530496-3ca408f9c2d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzh8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60') RETURNING id`)


  // .then((data:any) => {
  //   console.log(data.rows)
  // })
  // if (req.method === 'POST') {
  //   let project = req.body

  //   const insertSong = `INSERT INTO projects (name, genre_id, likes, shares, public, user_id, song_path, date_created) VALUES ('${project.name}', 1, 0, 0, false, ${project.user_id}, '${project.song_path}', CURRENT_TIMESTAMP) RETURNING id`;

  //   client.query(insertSong)
  //   .then((result:any) => {
  //     res.send(result.rows[0].id);
  //   })
  //   .catch((err:any) => {
  //     console.log('Error inserting new song into database:', err);
  //   })
  // } else if (req.method === 'PUT') {
  //   //otherwise it will be a PUT request
  //   let projectId = 1;
  //   projectId = req.query.project_id
  //   const parameters = req.query
  //   //for each parameter update the database with it's new value
  //   //UPDATE parameters to value where project_id = projectId
  //   res.send(`You have updated project ${projectId} in the database`);
  // } else {
  //   let projectId = 1;
  //   projectId = req.query.project_id
  //   //DELTE project from projects table where project_id = projectId
  //   res.send(`You have deleted project ${projectId} in the database`);
  // }
}
