import Link from 'next/link';
import Logo from './Logo';
//style with tailwindcss

export default function Navbar() {
    return (
        <div className='fixed top-0 left-0 h-16 w-screen m-0 flex flex-row text-justify bg-blue-300 text-white shadow-lg'>
            <Logo></Logo>
            <Link href="app\account">Account</Link>
            <Link href="app\Diary">Diary</Link>
            <Link href="app\Workout">Workout</Link>
        </div>
    );
}
