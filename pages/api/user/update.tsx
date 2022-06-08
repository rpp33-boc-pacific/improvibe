import { profile } from 'console';
import client from '../../../sql/db';
import hash from 'object-hash';

export default function updateUser(req: any, res: any) {

  const { user_id, name, email, password, about_me, photo_url } = req.body;

  if (password !== '') {
    const hashedPassword = hash(password);
    // Update everything including password
  } else {
    // Update everything except password
  }

  res.status(201).send('You have updated your profile information.');
}

