import client from '../../../sql/db';

export default function updateUser(req: any, res: any) {
  const userId = req.query.user_id
  //for each parameter update the database with it's new value
  //UPDATE parameters to value where user_id = userId
    res.send(`You have updated the user ${userId}'s profile`);
}