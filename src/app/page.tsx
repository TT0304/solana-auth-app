// src/app/page.tsx
'use client';

import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const HomePage = () => {
  const { publicKey } = useWallet();
  const router = useRouter();

  useEffect(() => {
    console.log('Router is available:', router);
  }, [router]);

  const handleLogin = () => {
    router.push('/member');
  };

  return (
    <div>
      <h1>Home Page</h1>
      <WalletMultiButton />
      <button onClick={handleLogin}>Login with Wallet</button>
    </div>
  );
};

export default HomePage;
