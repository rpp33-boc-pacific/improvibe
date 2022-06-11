import client from '../../../sql/db';

export default function likeSong(req, res) {
  const song = req.body.song.song_id;
  const user = req.body.user;
  const liked = req.body.liked;



  if (!liked) {
    //POST request
    //Add like
      client.query(`INSERT INTO likes (user_id, song_id) VALUES(${user}, ${song}) RETURNING id;`)
      .then((data) => {
        console.log('Like added for user');
        //Increment aggregate likes
        client.query(`UPDATE projects SET likes = likes + 1 WHERE id=${song};`)
        .then((data) => {
          console.log('Likes incremented for song');
          res.send('Success Updating Like!')
        })
        .catch((err) => {
          res.send(`Error updating like: ${err}`)
        })
      })
      .catch((err) => {
        res.send(`Error updating like: ${err}`)
      })
  } else {
    //DELETE request
    //Remove like
    client.query(`DELETE from likes WHERE user_id=${user}`)
    .then((data) => {
      console.log('Like removed for user');
      //Decrement aggregate likes
      client.query(`UPDATE projects SET likes = likes - 1 WHERE id=${song};`)
      .then((data) => {
        console.log('Likes decremented for song');
        res.send('Success Updating Like!')
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
