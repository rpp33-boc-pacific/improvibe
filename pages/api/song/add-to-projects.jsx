import client from '../../../sql/db';

export default function addProject(req, res) {
  const projectId = req.body.songId;
  const userId = req.body.userId;
  console.log('The project and user from "Add To Projects Click', projectId, userId);


  client.query(`SELECT * FROM projects WHERE id=${projectId};`)
  .then((data) => {
    let id = data.rows[0].id;
    let name = data.rows[0].name;
    let genre = data.rows[0].genre;
    let likes = data.rows[0].likes;
    let shares = data.rows[0].shares;
    let user_id = userId;
    let searched = data.rows[0].searched;
    let total_time = data.rows[0].total_time;
    let song_path = data.rows[0].song_path;

    client.query(`INSERT INTO projects (name, genre_id, likes, shares, user_id, searched, total_time, song_path, date_created) VALUES('${name}', ${genre}, ${likes}, ${shares}, ${user_id}, ${searched}, ${total_time}, '${song_path}', NOW()) RETURNING id;`)
    .then((projectIdData) => {
      const newProjectId = projectIdData.rows[0].id

      client.query(`SELECT * FROM layers WHERE l.project_id=${projectId};`)
      .then((layerData) => {
        const layers = layerData.rows
        if (layers.length) {
          layers.forEach((layer) => {
              const trackPath = layer.track_path
              const layerName = layer.name;
              const trackTime = layer.track_time;
              const trackPath = layer.track_path;
              const shares = layer.shares;
              //newProjectId already declared
              const searched = layer.searched;
              const tempo = layer.tempo;
              const pitch = layer.pitch;
              const volume = layer.volume;
              const startTime = layer.start_time;
              const trimStart = layer.trim_start;
              const trimEnd = layer.trim_end;
              const loop = layer.loop;
              //insert layer information
              client.query(`INSERT INTO layers (name, track_time, track_path, shares, project_id, searched, tempo, pitch, volume, start_time, trim_start, trim_end, loop) VALUES('${layerName}', ${trackTime}, ${trackPath}, ${shares}, ${newProjectId}, ${searched}, ${tempo}, ${pitch}, ${volume}, ${startTime}, ${trimStart}, ${trimEnd}, ${loop})`)
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


// CREATE TABLE layers (
//   id serial,
//   name varchar,
//   track_time integer,
//   track_path varchar,
//   shares integer,
//   project_id integer,
//   searched integer,
//   tempo decimal,
//   pitch decimal,
//   volume decimal,
//   start_time integer,
//   trim_start integer,
//   trim_end integer,
//   loop boolean
// );