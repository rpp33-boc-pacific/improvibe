import pool from '../../../sql/db';

export default async function updateUser(req: any, res: any) {
  if (req.method === 'PUT') {
    const { id, publicize } = req.query;

    let error = false;
    if (publicize === 'true') {
      const updateSongToPublic = `
        UPDATE public.projects
        SET public = true
        WHERE id = ${id}
      ;`;
      try {
        await pool.query(updateSongToPublic);
      } catch (err) {
        res.status(500).send();
        error = true;
      } finally {
        if (!error) {
          res.status(201).send('Song made public');
        }
      }

    } else if (publicize === 'false') {
      console.log('here');
      const updateSongToPrivate = `
        UPDATE public.projects
        SET public = false
        WHERE id = ${id}
      ;`;
      try {
        await pool.query(updateSongToPrivate);
      } catch (err) {
        res.status(500).send();
        error = true;
      } finally {
        if (!error) {
          res.status(201).send('Song made private');
        }
      }
    }
  }
}
