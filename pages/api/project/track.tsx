import client from '../../../sql/db';

export default function addTrack(req: any, res: any) {
  const track = req.query.track_path

  //INSERT INTO tracks (name, track_path) VALUES(track.name, track.track_path)
  res.send(`You have uploaded a track with a url of ${track} to the database`);
}

