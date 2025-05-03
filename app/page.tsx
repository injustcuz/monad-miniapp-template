'use client';

import { sendCryptoPayment } from '@/lib/payments';

export default function StorePage() {

  const handleBuy = async (priceInEth: string) => {
    try {
      const receiverAddress = '0x7f49f36d42D7652F78bc91FD84eD2fb6efC8bf03'; // Replace with your wallet address
      const tx = await sendCryptoPayment(priceInEth, receiverAddress);
      if (tx) {
        alert(`Payment Successful! Transaction: ${tx.hash}`);
      }
    } catch (error: any) {
      alert(`Payment Failed: ${error.message}`);
    }
  };

  return (
    <main className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">🛒 Fitness Store</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Product Example */}
        <div className="border rounded-xl p-4 shadow-sm">
          <img className="rounded-lg mb-3" src="/product1.jpg" alt="Natural Steroids" />
          <h2 className="text-xl font-semibold">Annie Var</h2>
          <p className="text-gray-700 my-2">0.015 ETH (~$29.99)</p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={() => handleBuy('0.015')}>
            Buy with Crypto
          </button>
        </div>

        {/* Another Product Example */}
        <div className="border rounded-xl p-4 shadow-sm">
          <img className="rounded-lg mb-3" src="/product2.jpg" alt="Frog-Tech" />
          <h2 className="text-xl font-semibold">Tren Bologne</h2>
          <p className="text-gray-700 my-2">0.01 ETH (~$19.99)</p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={() => handleBuy('0.01')}>
            Buy with Crypto
          </button>
        </div>

        {/* Additional Product Example */}
        <div className="border rounded-xl p-4 shadow-sm">
          <img className="rounded-lg mb-3" src="/product3.jpg" alt="Tiger Balls" />
          <h2 className="text-xl font-semibold">Natural Testosterone Replacement Therapy</h2>
          <p className="text-gray-700 my-2">0.02 ETH (~$39.99)</p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={() => handleBuy('0.02')}>
            Buy with Crypto
          </button>
        </div>
      </div>
    </main>
  );
}
