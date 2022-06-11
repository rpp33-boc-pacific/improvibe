import pool from "../../../../sql/db";

export default function getTopArtists(req: any, res: any) {

  // Returns a list of the artists with the most liked songs including their name, number of likes, and id

  const getTopArtistsQuery = `SELECT p.likes, u.name, u.id from projects p join users u ON p.user_id=u.id ORDER BY p.likes DESC LIMIT 4;`

  // pool.query(getTopArtistsQuery)
  // .then((data:any) => {
  //   console.log('top artists', data)
  // })
  // .catch((err: any) => {
  //   res.status(400);
  // });

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