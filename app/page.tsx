import Link from 'next/link';
import Navbar from './components/Navbar';

export default function HomePage() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link href="/workout">Workout</Link>
      <Navbar></Navbar>
    </div>
  );
} 