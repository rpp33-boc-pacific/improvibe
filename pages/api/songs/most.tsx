import client from '../../../sql/db';

export default function highestRankingBy(req: any, res: any) {
  const category = Object.keys(req.query);
  const count = Object.values(req.query);

  //SELECT count number of songs from the given category sorted by highest
  const example = [
    {
      song_id: 2,
      song_name: 'Song Name2',
      artist_name: 'Artist Name2',
      artist_id: 6,
      in_projects: true,
      genre: 'hip hop',
      cumulative_likes: 58,
      photo_url: 'https://footdistrict.com/media/magefan_blog/footdistrict-run-dmc-adidas-union-historica-3-1.jpg',
      liked: true
    },
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
    }
  ]
    res.send(example);
};



