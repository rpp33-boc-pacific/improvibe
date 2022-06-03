import client from '../../sql/db';

export default function searchSongs(req: any, res: any) {
  const key = req.query.any;
  //SELECT songs, song names and user names (but only if user has songs)

  //Look into why this is object Object
  interface Song {
    song_id: number,
    song_name: string,
    artist_name: string,
    artist_id: number,
    in_projects: boolean,
    genre: string,
    cumulative_likes: number,
    photo_url: string,
    liked: boolean
  }

  const example: Song[] = [
    {
      song_id: 1,
      song_name: 'Song Name1',
      artist_name: 'Artist Name1',
      artist_id: 4,
      in_projects: false,
      genre: 'rock',
      cumulative_likes: 40,
      photo_url: 'https://ychef.files.bbci.co.uk/976x549/p01j3jyb.jpg',
      liked: true
    }, {
      song_id: 2,
      song_name: 'Song Name2',
      artist_name: 'Artist Name2',
      artist_id: 6,
      in_projects: true,
      genre: 'hip hop',
      cumulative_likes: 58,
      photo_url: 'https://footdistrict.com/media/magefan_blog/footdistrict-run-dmc-adidas-union-historica-3-1.jpg',
      liked: true
    }
  ]
    res.send(example);
}


