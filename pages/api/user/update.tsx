import client from '../../../sql/db';

export default function updateUser(req: any, res: any) {
  const userId = req.query.userId;
  // for each parameter update the database with it's new value
  // UPDATE parameters to value where user_id = userId
  if (req.query.photo === 'true') {

  }
  res.status(201).send(`You have updated the user ${userId}'s profile`);
}

