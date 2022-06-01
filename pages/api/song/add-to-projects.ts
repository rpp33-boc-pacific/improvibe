import client from '../../../sql/db';

//Searching for Songs
export default function liked(req: any, res: any) {
  let song = 1;
  let user = 1;

  res.send(`The Current song id ${song} has been added to ${user}'s projects`);

}