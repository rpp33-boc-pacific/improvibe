import client from '../../../sql/db';

export default function likeSong(req: any, res: any) {
  const song = req.query.song_id;
  const user = req.query.user_id;
  const liked = req.query.liked;

  //Add project to user's projects
  res.send(`It is ${liked} that user ${user} likes song number ${song}`);
};