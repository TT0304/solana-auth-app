import { NextApiRequest, NextApiResponse } from 'next';
import { handleLogin } from '../../../utils/auth';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    await handleLogin(req, res);
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
