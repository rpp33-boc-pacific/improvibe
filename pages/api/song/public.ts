import pool from '../../../sql/db';

export default /* async */ function togglePublic(req: any, res: any) {
  const song = req.query.song_id;
  const publicState = req.query.public === 'true' ? true : false;

  if (publicState) {
    // Update public boolean to true
    // If error, send 500 response
    res.status(201).send();
  } else {
    // Update public boolean to false
    // If error, send 500 response
    res.status(201).send();
  }
};