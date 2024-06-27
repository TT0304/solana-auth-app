// src/pages/api/auth/check.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const isAuthenticated = true;

  if (isAuthenticated) {
    res.status(200).json({ isAuthenticated: true });
  } else {
    res.status(401).json({ isAuthenticated: false });
  }
};
