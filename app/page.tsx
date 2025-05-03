import ExerciseForm from '@/components/ExerciseForm';
import WorkoutHistory from '@/components/WorkoutHistory';
import UserProfile from '@/components/UserProfile';
import WalletConnect from '@/components/WalletConnect';
import Link from 'next/link';


export default function Home() {
  return (
    <main className="max-w-md mx-auto my-10">
      <nav className="flex justify-center gap-4 mb-8">
        <Link href="/" className="text-blue-500 font-semibold">🏠 Home</Link>
        <Link href="/store" className="text-blue-500 font-semibold">🛒 Store</Link>
      </nav>

      <h1 className="text-2xl font-bold text-center">My Fitness App</h1>
      <ExerciseForm />
      <WorkoutHistory />
      <UserProfile />
      <WalletConnect />
    </main>
  );
}
