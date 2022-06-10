import client from '../../../sql/db';

export default function highestRankingBy(req: any, res: any) {
  const category = Object.keys(req.query);
  const count = Object.values(req.query);

  //SELECT count number of songs from the given category sorted by highest
  const example = [
    {
      song_id: 2,
      song_name: 'Hello Again',
      artist_name: 'Caiwin',
      artist_id: 6,
      in_projects: true,
      genre: 'hip hop',
      cumulative_likes: 58,
      photo_url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&cover=crop&w=100&q=60',
      liked: false
    },
    {
      song_id: 1,
      song_name: 'My Time',
      artist_name: 'Andhar',
      artist_id: 4,
      in_projects: false,
      genre: 'rock',
      cumulative_likes: 40,
      photo_url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&cover=crop&w=500&q=60',
      liked: false
    }
  ]
    res.send(example);
};



