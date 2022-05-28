import type { NextApiRequest, NextApiResponse } from 'next';
import { getProfileData } from '../../../database/profile-helpers';

type Data = {
  name: string
};

// const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
const handler = (req, res) => {
  const { name } = req.query;
  // let err;
  // try {
  //   var userData = await getProfileData(name);
  // } catch (error) {
  //   err = true;
  // } finally {
  //   if (!err) {
  //     res.status(200).json({ data: userData });
  //   }
  // }
  const dumbyData = {
    user: {
      about: 'Dumb about',
      photoUrl: 'https://artscimedia.case.edu/wp-content/uploads/sites/79/2016/12/14205134/no-user-image.gif'
    },
    songs: []
  };
  res.status(200).send(dumbyData);
};

export default handler;