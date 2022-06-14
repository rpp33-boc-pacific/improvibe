import client from '../../../sql/db';

export default function likeSong(req, res) {
  // const song = 15;
  const song = req.body.song.song_id;
  const user = req.body.user;
  let liked = req.body.liked;
  liked = !liked;

  if (liked) {
    console.log('the user liked it')
    //POST request
    //Add like
    // INSERT INTO likes (user_id, song_id) VALUES(${user}, ${song});
      client.query(`INSERT INTO likes (user_id, song_id) VALUES(${user}, ${song}) RETURNING id;`)
      client.query(`UPDATE projects SET likes = likes + 1 WHERE id=${song} RETURNING likes;`)
      .then((data)=> {
        res.send(data.rows.likes);
      })
  } else {
    //DELETE request
    //Remove like
    client.query(`DELETE from likes WHERE user_id=${user}`)
    .then((data) => {
      console.log('Like removed for user');
      //Decrement aggregate likes
      client.query(`UPDATE projects SET likes = likes - 1 WHERE id=${song} RETURNING likes;`)
      .then((data) => {
        res.send(data.rows.likes)
      })
      .catch((err) => {
        res.send(`Error updating like: ${err}`)
      })
    })
    .catch((err) => {
      res.send(`Error updating like: ${err}`)
    })
  }
};
