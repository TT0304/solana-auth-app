'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const MemberPage = () => {
  const [authStatus, setAuthStatus] = useState<{
    isAuthenticated: boolean;
  } | null>(null);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/check');
        if (response.ok) {
          const data = await response.json();
          setAuthStatus(data);
        } else {
          setAuthStatus({ isAuthenticated: false });
          console.error('Failed to check auth status');
        }
      } catch (error) {
        setAuthStatus({ isAuthenticated: false });
        console.error('Error fetching auth status:', error);
      }
    };

    checkAuth();
  }, []);

  useEffect(() => {
    if (authStatus && !authStatus.isAuthenticated) {
      router.push('/login');
    }
  }, [authStatus, router]);

  if (authStatus === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Member Page</h1>
      {authStatus.isAuthenticated ? (
        <p>Welcome, you are authenticated!</p>
      ) : (
        <p>Redirecting to login...</p>
      )}
    </div>
  );
};

export default MemberPage;
