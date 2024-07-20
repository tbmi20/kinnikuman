import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link href="/workout">Workout</Link>
    </div>
  );
} 