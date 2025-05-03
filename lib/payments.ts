import { ethers } from 'ethers';

export async function sendCryptoPayment(amountInEth: string, receiverAddress: string) {
  if (!(window as any).ethereum) {
    alert('No Ethereum wallet detected! Please install MetaMask or Coinbase Wallet.');
    return;
  }

  const provider = new ethers.BrowserProvider((window as any).ethereum);
  const signer = await provider.getSigner();

  const tx = await signer.sendTransaction({
    to: receiverAddress,
    value: ethers.parseEther(amountInEth),
  });

  return tx;
}
