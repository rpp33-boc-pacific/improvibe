import pool from '../../../sql/db';

const profileOwnerExample = {
  // name, aboutMe, photoUrl, and all songs (public and private)
  userId: 1,
  name: 'David Bowe',
  aboutMe: 'All about David Bowe...',
  photoUrl: 'https://ychef.files.bbci.co.uk/976x549/p01j3jyb.jpg',
  songs: [
    {
      song_id: 1,
      song_name: 'Song Name1',
      artist_name: 'Artist Name1',
      in_projects: false,
      genre: 'rock',
      photo_url: 'https://ychef.files.bbci.co.uk/976x549/p01j3jyb.jpg',
      song_path: 'https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav',
      liked: true,
    },
    {
      song_id: 2,
      song_name: 'Song Name2',
      artist_name: 'Artist Name2',
      in_projects: true,
      genre: 'hip hop',
      photo_url: 'https://footdistrict.com/media/magefan_blog/footdistrict-run-dmc-adidas-union-historica-3-1.jpg',
      song_path: 'https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav',
      liked: true
    },
  ]
};
const profileExample = {
  // Name, AboutMe, and public songs
  userId: 1,
  name: 'David Bowe',
  aboutMe: 'All about David Bowe...',
  photoUrl: 'https://ychef.files.bbci.co.uk/976x549/p01j3jyb.jpg',
  songs: [
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
};

export default function getProfile(req: any, res: any) {

  const userId = req.query.userId;

  if (req.query.owner === 'true') {
    res.send(profileOwnerExample);
  } else {
    res.send(profileExample);
  }
}