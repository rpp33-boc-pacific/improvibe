import pool from "../../../../sql/db";

export default function getTopArtists(req: any, res: any) {

  // Returns a list of the artists with the most liked songs including their name, number of likes, and id

  const getTopArtistsQuery = `SELECT p.likes, u.name, u.id FROM projects p JOIN users u ON p.id=u.id ORDER BY p.likes DESC LIMIT 3;`

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
     likes: 237,
    },
    {id: 2,
      name: 'Yvonne Lu',
      likes: 639,
     },
     {id: 3,
      name: 'Safiya Barnes',
      likes: 798,
     }
  ]);
}