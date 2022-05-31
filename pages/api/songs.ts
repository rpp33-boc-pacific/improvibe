import client from '../../sql/db';

//Searching for Songs
export default function userHandler(req: any, res: any) {
  const query = req.query
  //likes
  //shares
  //date_created

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
  // GET: Songs matching query parameters. For each song displayed: song id, song name, artist name, user ID,  in current users song list, genre, cumulative likes, artist profile picture, liked by current user

  res.send(fakeSongs)
}

