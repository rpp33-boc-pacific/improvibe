import client from '../../../../sql/db';

export default function likedByCurrentUser(req, res) {
  const userId = req.query.id;
  const songId = req.query.songId

  client.query(`SELECT * FROM likes WHERE user_id=${userId} AND song_id=${songId};`)
  .then((data) => {
    res.send(data.rows);
  })
  .catch((err)=> {
    res.send('Error retrieving like status from db:', err);
  })
}