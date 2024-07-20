import Link from 'next/link';

export default function Navbar() {
    return (
        <div>
            <Link href="/diary">Diary  </Link>
            <Link href="/workout"> Workout </Link>
            <Link href="/account">  Account</Link>
        </div>
    );
}