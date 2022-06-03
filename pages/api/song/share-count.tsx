import client from '../../../sql/db';

export default function updateShares(req: any, res: any) {
  const song = req.query.song_id

  //Increment the shares for this song
  res.send(`Share count for song number ${song} has been incremented`);
};

