'use client';

import { WagmiProvider, createConfig, useAccount, useConnect, http } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { metaMask, coinbaseWallet } from 'wagmi/connectors'; // <- Important updated line
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

const config = createConfig({
  chains: [mainnet],
  connectors: [
    metaMask({ name: 'MetaMask' }), // Explicitly MetaMask connector
    coinbaseWallet({ appName: 'MyFitnessApp', name: 'Coinbase Wallet' }), // Coinbase Wallet
  ],
  transports: {
    [mainnet.id]: http(),
  },
});

const queryClient = new QueryClient();

function WalletButtonComponent() {
  const { connect, connectors, isPending, error } = useConnect();
  const { address, isConnected } = useAccount();
  const [loadingConnector, setLoadingConnector] = useState('');

  const handleConnect = (connector) => {
    setLoadingConnector(connector.name);
    connect({ connector });
  };

  return (
    <div className="p-4 border rounded space-y-2">
      {isConnected ? (
        <div>Connected wallet: {address}</div>
      ) : (
        connectors.map((connector) => (
          <button
            key={connector.id}
            className="bg-purple-500 text-white py-2 px-4 rounded mr-2"
            disabled={isPending && loadingConnector === connector.name}
            onClick={() => handleConnect(connector)}
          >
            Connect {connector.name}
          </button>
        ))
      )}
      {error && <p className="text-red-500">Error: {error.message}</p>}
    </div>
  );
}

export default function WalletButton() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <WalletButtonComponent />
      </QueryClientProvider>
    </WagmiProvider>
  );
}
