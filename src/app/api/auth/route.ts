import { NextApiRequest, NextApiResponse } from 'next';
import { handleLogin } from '../../../utils/auth';

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  await handleLogin(req, res);
}
