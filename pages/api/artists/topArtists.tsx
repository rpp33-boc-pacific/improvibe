import pool from "../../../sql/db";

export default function getTopArtists(req: any, res: any) {
  let { userId } = req.query;
  let { method } = req.method;

  // SELECT Top artists.
  // returns artists in a descending order and limits the results to 3

  // let getTopArtistsQuery = `SELECT * FROM users LIMIT 3 DESC`;

  // pool
  // .query(getTopArtistsQuery)
  // .then(data) => {
  //   console.log('top artists', data])
  // })
  // .catch((err: any) => {
  //   res.status(400);
  // }
  // )

  // SENDING SAMPLE DATA TO CHECK API END POINTS
  // console.log('request received')

  res.status(200).send([
    {id: 1,
     name: 'Kendall Irwin',
     email: 'test@hotmail.com',
     hash: '120479012',
     about_me: 'I am fabulous',
     searched: 237,
    },
    {id: 2,
      name: 'Yvonne Lu',
      email: 'test@hotmail.com',
      hash: '120479012',
      about_me: 'I am fabulous',
      searched: 639,
     },
     {id: 3,
      name: 'Safiya Barnes',
      email: 'test@hotmail.com',
      hash: '120479012',
      about_me: 'I am fabulous',
      searched: 798,
     }
  ]);
}