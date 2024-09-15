import Link from 'next/link';
import Logo from './Logo';
import { IconType } from 'react-icons';
import { FaDumbbell } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { FaBook } from "react-icons/fa6";


//style with tailwindcss

export default function Navbar() {
    return (
        <div className='fixed z-50 bottom-[2.5%] left-1/3 h-16 w-1/3 m-0 flex flex-row rounded-full text-justify bg-charcoal_grey text-white shadow-lg'>
            <Link href="/diary" className='navbar-icon'><NavIcon icon={<FaBook size="28"/>} tooltip='Diary' /></Link>
            <Link href="/workout" className='navbar-icon'><NavIcon icon={<FaDumbbell size="28"/>} tooltip='Workouts' /></Link>
            <Link href="account" className='navbar-icon'><NavIcon icon={<IoPerson size="28"/>} tooltip='Account' /></Link>
        </div>
    );
}

interface NavIconProps {
    icon: React.ReactNode;
    tooltip?: string;
}

function NavIcon({ icon, tooltip = 'temp' }: NavIconProps) {
    return (
        <div className='navbar-icon group'>
            {icon}
            <div className='navbar-tooltip group-hover:scale-50'>{tooltip}</div>
        </div>
    );
}
