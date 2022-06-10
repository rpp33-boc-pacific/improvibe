import { profile } from 'console';
import pool from '../../../sql/db';
import hash from 'object-hash';

export default async function updateUser(req: any, res: any) {
  // res.status(201).send('You have updated your profile information.');
  if (req.method === 'PUT') {
    const { id, name, email, password, aboutMe, photoUrl } = req.body;
    const updateUserExceptPassword = `
      UPDATE public.users
      SET
        name = '${name}',
        email = '${email}',
        about_me = '${aboutMe}',
        photo_url = '${photoUrl}'
      WHERE id = ${id}
    ;`;

    let error = false;
    if (password === '') {
      try {
        await pool.query(updateUserExceptPassword);
      } catch (err) {
        res.status(500).send();
        error = true;
      } finally {
        if (!error) {
          res.status(201).send('Profile updated');
        }
      }

    } else if (password !== '') {
      const hashedPassword = hash(password);
      const updateUser = `
        UPDATE public.users
        SET
          name = '${name}',
          email = '${email}',
          hash = '${hashedPassword}',
          about_me = '${aboutMe}',
          photo_url = '${photoUrl}'
        WHERE id = ${id}
      ;`;

      try {
        await pool.query(updateUser);
      } catch (err) {
        res.status(500).send();
        error = true;
      } finally {
        if (!error) {
          res.status(201).send('Profile updated');
        }
      }
    }
  }
}