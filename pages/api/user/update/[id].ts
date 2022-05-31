import Email from 'next-auth/providers/email';
import client from '../../../../sql/db';

export default function updateUser(req: any, res: any) {
  let keywords = ['email', 'about_me', 'password', 'photo_url', 'public'];
  const user = req.query.user;
  let parameter;
  let value;
  keywords.forEach((word) => {
    if (req.url.includes(word)) {
      parameter = word;
      value = req.query[parameter];
    }
  })
  res.send(`You have updated the user ${user}'s ${parameter} to ${value}`);
}