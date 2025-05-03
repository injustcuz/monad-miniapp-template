'use client';

import dynamic from 'next/dynamic';

const WalletButton = dynamic(() => import('./WalletButton'), { ssr: false });

export default function WalletConnect() {
  return (
    <div>
      <WalletButton />
    </div>
  );
}
