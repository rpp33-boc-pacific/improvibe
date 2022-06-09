import pool from '../../../../sql/db';

const userExample = {
  user: {
    id: 1,
    name: 'David Bowe',
    about_me: 'All about David Bowe...',
    photoUrl: 'https://ychef.files.bbci.co.uk/976x549/p01j3jyb.jpg',
  },
  songs: [ // public songs ONLY
    {
      song_id: 1,
      song_name: 'Song Name1',
      artist_name: 'Artist Name1',
      photo_url: 'https://ychef.files.bbci.co.uk/976x549/p01j3jyb.jpg',
      genre: 'rock',
      song_path: 'https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav',
      searched: 9,
      likes: 20,
      shares: 10,
      total_time: 2,
      date_created: 'timestamp here',
      liked: true,
    },
    {
      song_id: 1,
      song_name: 'Song Name1',
      artist_name: 'Artist Name1',
      photo_url: 'https://ychef.files.bbci.co.uk/976x549/p01j3jyb.jpg',
      genre: 'rock',
      song_path: 'https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav',
      searched: 9,
      likes: 20,
      shares: 10,
      total_time: 2,
      date_created: 'timestamp here',
      liked: true,
    },
  ]
};

export default /* async */ function getUser(req: any, res: any) {
  if (req.method === 'GET') {
    // res.status(200).send(userExample);
    // const userId = Number(req.query.id);
    // const clientUserId = Number(req.query.client);

    // const retrieveUserInfo = `SELECT id, name, about_me, photo_url FROM users WHERE id = ${userId};`;
    // const retrieveSongs = `
    //   SELECT
    //     p.id as song_id,
    //     p.name as song_name,
    //     u.name as artist_name,
    //     g.name as genre,
    //     u.photo_url,
    //     p.song_path,
    //     p.searched,
    //     p.likes,
    //     p.shares,
    //     p.total_time,
    //     p.date_created
    //   FROM public.projects p
    //   INNER JOIN public.genres g
    //   ON (p.genre_id = g.id)
    //   INNER JOIN public.users u
    //   ON (p.user_id = u.id)
    //   WHERE u.id = ${userId}
    //   AND p.public = true;
    // `;
    // const retrieveLikedSongs = `SELECT song_id FROM likes WHERE user_id = ${clientUserId};`;

    // let error = false;
    // try {
    //   var userResult = await pool.query(retrieveUserInfo);
    //   if (userResult.rowCount === 0) {
    //     throw new Error('User does not exist');
    //   }
    // } catch (err: any) {
    //   error = true;
    //   if (err.message === 'User does not exist') {
    //     res.status(400).send(err.message);
    //   } else {
    //     res.status(500).send();
    //   }
    // }

    // if (!error) {
    //   try {
    //     var songsResult = await pool.query(retrieveSongs);
    //     if (songsResult.rowCount === 0) {
    //       throw new Error('User does not have any songs');
    //     }
    //   } catch (err: any) {
    //     error = true;
    //     if (err.message === 'User does not have any songs') {
    //       res.status(200).send({ user: userResult.rows[0], songs: [] });
    //     } else {
    //       res.status(500).send();
    //     }
    //   }
    // }

    // if (!error) {
    //   try {
    //     var likedSongs = await pool.query(retrieveLikedSongs);
    //   } catch (err) {
    //     error = true;
    //     res.status(500).send();
    //   }
    // }

    // if (!error) {
    //   // convert likedSongs.rows (array) to object
    //   const likedSongIds: any = {};
    //   likedSongs.rows.forEach((song: any) => { likedSongIds[song.song_id] = true; });
    //   // add liked property to each song (client likes user's song)
    //   songsResult.rows.forEach((song: any) => {
    //     if (likedSongIds[song.song_id]) {
    //       song.liked = true;
    //     } else {
    //       song.liked = false;
    //     }
    //   });
    //   res.status(200).send({ user: userResult.rows[0], songs: songsResult.rows });
    // }
  }
};