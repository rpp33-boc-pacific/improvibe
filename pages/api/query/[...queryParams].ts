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
      sort = 'ORDER BY name DESC';
    }

    if (queryTypeParam === 'Songs') {
      query =
      `SELECT *
      FROM projects
      WHERE name LIKE '${queryInput}%'
      AND public
      ${sort};`;
      console.log(query);
    } else if (queryTypeParam === 'Artists') {
      query =
      `SELECT *
      FROM users
      WHERE name LIKE ${queryInput}%
      ${sort};`;
    } else if (queryTypeParam === 'Genres') {
      query =
      `SELECT *
      FROM projects
      WHERE genre LIKE %${queryInput}%
      AND public
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