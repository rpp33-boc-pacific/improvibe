import client from '../../sql/db';

export default function searchSongs(req: any, res: any) {
  const key = req.query.any;
  //SELECT from songs, song names and user names (but only if user has songs)

  interface Song {
    song_id: number,
    song_name: string,
    song_path: string,
    artist_name: string,
    artist_id: number,
    in_projects: boolean,
    genre: string,
    tags: Array<string>,
    cumulative_likes: number,
    photo_url: string,
    liked: boolean
  }

  const example: Song[] = [
    {
      song_id: 1,
      song_name: 'Song Name1',
      song_path: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      artist_id: 4,
      artist_name: 'Artist Name1',
      in_projects: false,
      genre: 'rock',
      tags: ['rock', 'pop'],
      cumulative_likes: 40,
      photo_url: 'https://artscimedia.case.edu/wp-content/uploads/sites/79/2016/12/14205134/no-user-image.gif',
      liked: false
    }, {
      song_id: 2,
      song_name: 'Song Name2',
      song_path: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
      artist_name: 'Artist Name2',
      artist_id: 6,
      in_projects: true,
      genre: 'hip hop',
      tags: ['rock', 'pop'],
      cumulative_likes: 58,
      photo_url: 'https://artscimedia.case.edu/wp-content/uploads/sites/79/2016/12/14205134/no-user-image.gif',
      liked: true
    }
  ]
    res.send(example);
}


