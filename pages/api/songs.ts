import artists from '../../components/explorerPage/topArtists-sampleData';
import client from '../../sql/db';

//Searching for Songs
export default function userHandler(req: any, res: any) {
  const query = req.query
  console.log(req.query);
  //most likes
  //most shares
  //date_created - most recent
  //all artists that contain
  //all songs that contain
  //all genres that contain

  const fakeSongs = [
    {
      song_id: 1,
      name: 'Song Name1',
      artist_name: 'Artist Name1',
      user_id: 4,
      in_projects: false,
      genre: 'rock',
      cumulative_likes: 40,
      photo_url: 'https://ychef.files.bbci.co.uk/976x549/p01j3jyb.jpg',
      liked: true
    }, {
      song_id: 2,
      name: 'Song Name2',
      artist_name: 'Artist Name2',
      user_id: 6,
      in_projects: true,
      genre: 'hip hop',
      cumulative_likes: 58,
      photo_url: 'https://footdistrict.com/media/magefan_blog/footdistrict-run-dmc-adidas-union-historica-3-1.jpg',
      liked: true
    }
  ]
  res.send(fakeSongs)
}

