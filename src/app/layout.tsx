// src/app/layout.tsx
'use client';

import WalletContextProvider from './components/WalletProvider';

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <WalletContextProvider>{children}</WalletContextProvider>
      </body>
    </html>
  );
}
