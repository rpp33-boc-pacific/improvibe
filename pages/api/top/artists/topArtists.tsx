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
     name: 'Norah Mellor',
     likes: '7k',
     photo_url: 'https://media.istockphoto.com/photos/punk-woman-acoustic-guitar-picture-id1267536630?b=1&k=20&m=1267536630&s=170667a&w=0&h=PKQfQjZzOMsdcK6fsB6NXjYWzri9xkB5VzeteRSCkrw='
    },
    {id: 2,
      name: 'Izaan John',
      likes: '6k',
      photo_url: 'https://media.istockphoto.com/photos/black-male-guitarist-singing-and-playing-acoustic-guitar-on-stage-picture-id1137781483?b=1&k=20&m=1137781483&s=170667a&w=0&h=-yNllTa_qcqnZWLpqIO9BMv4D8sKkRCA_PO9mIfIVv8='
     },
     {id: 3,
      name: 'Safiya Barnes',
      likes: '3k',
      photo_url: 'https://media.istockphoto.com/photos/rock-band-with-guitarists-and-drummer-performing-at-a-concert-in-a-picture-id1329876201?b=1&k=20&m=1329876201&s=170667a&w=0&h=6-K-glZccMY6JyF7Z3JX-XYNAcNRE0bWBrmJ9N6jsEQ='
     }
  ]);
}