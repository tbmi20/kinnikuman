import Link from 'next/link';
import Logo from './Logo';
//style with tailwindcss

export default function Navbar() {
    return (
        <div className='fixed top-0 left-0 h-screen w-16 m-0 flex flex-col text-justify bg-blue-300 text-white shadow-lg'>
            <Logo></Logo>
            <i>A</i>
            <i>B</i>
            <i>C</i>
            <i>D</i>
            <i>E</i>
        </div>
    );
}
