import pool from '../../../sql/db';

export default function addProject(req, res) {
  const projectId = req.body.song.song_id
  const userId = req.body.user.id;

  pool.query(`SELECT * FROM projects WHERE id=${projectId}`)
  .then((data) => {
    let name = data.rows[0].name;
    let genre = data.rows[0].genre;
    let likes = 0;
    let shares = 0;
    let publicStatus = false;
    let user_id = userId;
    let searched = 0;
    let total_time = data.rows[0].total_time;
    let song_path = data.rows[0].song_path;
    let date_created = Date.now();

    pool.query(`INSERT INTO projects (name, genre, likes, shares, public, user_id, searched, total_time, song_path, date_created) VALUES ('${name}', '${genre}', ${likes}, ${shares}, ${publicStatus}, ${user_id}, ${searched}, ${total_time}, '${song_path}', ${date_created}) RETURNING id`)
    .then((projectIdData) => {
      const newProjectId = projectIdData.rows[0].id
      pool.query(`SELECT * FROM layers WHERE project_id=${projectId}`)
      .then((layerData) => {
        const layers = layerData.rows
        if (layers.length) {
          layers.forEach((layer) => {
              const track_path = layer.track_path
              const name = layer.name;
              const track_time = layer.track_time;
              const shares = 0;
              //newProjectId already declared
              const searched = 0;
              const tempo = layer.tempo;
              const pitch = layer.pitch;
              const volume = layer.volume;
              const start_time = layer.start_time;
              const trim_start = layer.trim_start;
              const trim_end = layer.trim_end;
              const loop = layer.loop;
              //insert layer information
              pool.query(`INSERT INTO layers (name, track_time, track_path, shares, project_id, searched, tempo, pitch, volume, start_time, trim_start, trim_end, loop) VALUES ('${name}', ${track_time}, '${track_path}', ${shares}, ${newProjectId}, ${searched}, ${tempo}, ${pitch}, ${volume}, ${start_time}, ${trim_start}, ${trim_end}, ${loop})`)
            .catch((err) => {
              console.log('Error inserting track:', err);
            })
          })
        }
      })
    })
    .catch((err) => {
      console.log('Error inserting new data into db:', err);
    })
  })
  .catch((err) => {
    console.log('Error getting project data from db:', err);
  })
};
