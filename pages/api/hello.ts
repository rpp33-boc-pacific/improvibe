// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// Example: GET http://localhost:3000/api/hello --> Response.body: { name: 'John Doe' }
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}
