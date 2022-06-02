// import type { NextApiRequest, NextApiResponse } from 'next';
// import { getProfileData } from '../../../database/profile-helpers';

// type Data = {
//   name: string
// };

// const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
//   const { name } = req.query;
//   let err;
//   try {
//     var userData = await getProfileData(name);
//   } catch (error) {
//     err = true;
//   } finally {
//     if (!err) {
//       res.status(200).json({ data: userData });
//     }
//   }
//   res.status(200).send(dumbyData);
// };

// export default handler;
export {};