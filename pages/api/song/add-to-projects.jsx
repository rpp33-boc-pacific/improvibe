import client from '../../../sql/db';

export default function addProject(req, res) {
  // const projectId = req.body.songId;
  // const userId = req.body.userId;
  const projectId = 1;
  const userId = 7;

  // client.query(`select * from projects where user_id=7;`).then((data) => {
  //   console.log(data.rows)
  // })

  client.query(`select * from tracks where id=13;`).then((data) => {
    console.log(data.rows)
  })

  // client.query(`select * from layers where project_id=55;`).then((data) => {
  //   console.log(data.rows)
  // })

  //  client.query(`delete from tracks where id=11;`).then((data) => {
  //     console.log(data.rows)
  //   })

  //   client.query(`delete from projects where id=54;`).then((data) => {
  //   console.log(data.rows)
  // })

  // client.query(`SELECT * FROM projects WHERE id=${projectId};`)
  // .then((data) => {
  //   let id = data.rows[0].id;
  //   let name = data.rows[0].name;
  //   let genre = data.rows[0]['genre_id'];
  //   let likes = data.rows[0].likes;
  //   let shares = data.rows[0].shares;
  //   let user_id = userId;
  //   let searched = data.rows[0].searched;
  //   let total_time = data.rows[0].total_time;
  //   let song_path = data.rows[0].song_path;

  //   client.query(`INSERT INTO projects (name, genre_id, likes, shares, user_id, searched, total_time, song_path, date_created) VALUES('${name}', ${genre}, ${likes}, ${shares}, ${user_id}, ${searched}, ${total_time}, '${song_path}', NOW()) RETURNING id;`)
  //   .then((projectIdData) => {
  //     const newProjectId = projectIdData.rows[0].id

  //     client.query(`SELECT *, t.track_path FROM layers l INNER JOIN tracks t ON l.track_id=t.id WHERE l.project_id=${projectId};`)
  //     .then((layerData) => {
  //       const layers = layerData.rows
  //       if (layers.length) {
  //         layers.forEach((layer) => {
  //           const trackPath = layer.track_path
  //           //insert track information
  //           console.log('track path:', trackPath);
  //           client.query(`INSERT INTO tracks (track_path, date_created) VALUES('${trackPath}', NOW()) RETURNING id;`)
  //           //then insert layer information once we have track_id
  //           .then((trackIdData) => {
  //             const layerName = layer.name;
  //             const trackId = trackIdData.rows[0].id;
  //             const shares = layer.shares;
  //             //newProjectId already declared
  //             const searched = layer.searched;
  //             const tempo = layer.tempo;
  //             const pitch = layer.pitch;
  //             const volume = layer.volume;
  //             const startTime = layer.start_time;
  //             const trimStart = layer.trim_start;
  //             const trimEnd = layer.trim_end;
  //             const loop = layer.loop;
  //             //insert layer information
  //             client.query(`INSERT INTO layers (name, track_id, shares, project_id, searched, tempo, pitch, volume, start_time, trim_start, trim_end, loop) VALUES('${layerName}', ${trackId}, ${shares}, ${newProjectId}, ${searched}, ${tempo}, ${pitch}, ${volume}, ${startTime}, ${trimStart}, ${trimEnd}, ${loop})`).catch((err) => {console.log('Error inserting layer:', err)})
  //           })
  //           .catch((err) => {
  //             console.log('Error inserting track:', err);
  //           })
  //         })
  //       }
  //     })
  //   })
  //   .catch((err) => {
  //     console.log('Error inserting new data into db:', err);
  //   })
  // })
  // .catch((err) => {
  //   console.log('Error getting project data from db:', err);
  // })
};