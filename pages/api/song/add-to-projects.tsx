import client from '../../../sql/db';

export default function addProject(req: any, res: any) {
  const project = req.query.song_id;
  const user = req.query.user_id;

  //Add project to user's projects
  res.send(`You have added project number ${project} to user ${user}'s projects`);
}
