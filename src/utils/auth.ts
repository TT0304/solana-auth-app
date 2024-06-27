import { NextApiRequest, NextApiResponse } from 'next';
import { PublicKey } from '@solana/web3.js';
import prisma from './prisma';

export const authenticateUser = async (wallet: PublicKey) => {
  let user = await prisma.user.findUnique({
    where: { wallet: wallet.toString() },
  });

  if (!user) {
    user = await prisma.user.create({ data: { wallet: wallet.toString() } });
  }

  return user;
};

export const handleLogin = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { wallet } = req.body;

  if (!wallet) {
    return res.status(400).json({ message: 'Wallet address is required' });
  }

  try {
    const publicKey = new PublicKey(wallet);
    const user = await authenticateUser(publicKey);
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};
