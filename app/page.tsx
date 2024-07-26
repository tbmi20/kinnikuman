import Link from 'next/link';
import Navbar from './components/Navbar';
import Background from './components/Background';

export default function HomePage() {
  return (
    <div>
      <Background></Background>
      <h1>Dashboard</h1>
      <Link href="/workout">Workout</Link>
      <Navbar></Navbar>
    </div>
  );
} 