import pool from "../../../sql/db";

export default function Query(req: any, res: any) {
  const { queryParams } = req.query;
  if (req.method === 'GET') {
    var query = '';
    var sort = '';
    const { queryParams } = req.query;
    const queryInput = queryParams[0];
    const queryTypeParam = queryParams[1];
    const sortParam = queryParams[2];

    if (sortParam === 'Most Liked') {
      sort = 'ORDER BY likes DESC';
    } else if (sortParam === 'Least Liked') {
      sort = 'ORDER BY likes ASC';
    } else if (sortParam === 'Most Shared') {
      sort = 'ORDER BY shares DESC';
    } else if (sortParam === 'Least Shared') {
      sort = 'ORDER BY shares ASC';
    } else if (sortParam === 'Most Recent') {
      sort = 'ORDER BY date_created DESC';
    } else if (sortParam === 'Least Recent') {
      sort = 'ORDER BY date_created ASC';
    } else if (sortParam === 'Most Popular'){
      sort = 'ORDER BY searched DESC';
    } else if (sortParam === 'Least Popular'){
      sort = 'ORDER BY searched ASC';
    } else if (sortParam === 'Alphabetical'){
      if (queryTypeParam === 'Genres') {
        sort = 'ORDER BY projects.name DESC';
      } else {
        sort = 'ORDER BY name DESC';
      }
    }

    // REATE TABLE users (
    //   id serial,
    //   name varchar(255),
    //   email varchar(255),
    //   hash varchar(255),
    //   about_me text,
    //   searched integer,
    //   emailVerified timestamp,
    //   photo_url varchar(255)
    // );

    // CREATE TABLE projects (
    //   id serial,
    //   name varchar(255),
    //   genre varchar(255),
    //   likes integer,
    //   shares integer,
    //   public boolean,
    //   user_id integer,
    //   searched integer,
    //   total_time integer,
    //   song_path varchar(255),
    //   date_created timestamp
    // );
    if (queryTypeParam === 'Songs') {
      query =
      `SELECT projects.id, projects.name as song_name, projects.genre, projects.likes as cumulativeLikes, projects.shares, projects.user_id, projects.song_path, projects.date_created, users.photo_url, users.name as artist_name
      FROM projects
      JOIN users
      ON users.id
      IN
        (SELECT user_id
        WHERE
        LOWER(projects.name) LIKE LOWER('${queryInput}%')

        )
        WHERE LOWER(projects.name) LIKE LOWER('${queryInput}%')
      ${sort};`;
      console.log(query);
    } else if (queryTypeParam === 'Artists') {
      query =
      `SELECT *
      FROM users
      WHERE name LIKE '${queryInput}%'
      ${sort};`;
    } else if (queryTypeParam === 'Genres') {
      query =
      `SELECT projects.id, projects.name as song_name, projects.genre, projects.likes as cumulativeLikes, projects.shares, projects.user_id, projects.song_path, projects.date_created, users.photo_url, users.name as artist_name
      FROM projects
      JOIN users
      ON users.id
      IN
        (SELECT user_id
        WHERE
        LOWER(genre) LIKE LOWER('${queryInput}%')

        )

      ${sort};`;
    }
    return pool
    .connect()
    .then((client: any) => {
      return client
      .query(query)
      .then((data: any) => {
        client.release();
        return res.send(data);
      });
    });
  } else {
    res.send('This route only takes GET HTTP requests');
  }
};