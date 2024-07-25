import Link from 'next/link';
import Logo from './Logo';
import { IconType } from 'react-icons';
import { FaDumbbell } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { FaBook } from "react-icons/fa6";


//style with tailwindcss

export default function Navbar() {
    return (
        <div className='fixed bottom-0 left-0 h-16 w-screen m-0 flex flex-row text-justify bg-blue-300 text-white shadow-lg'>
            <Logo></Logo>
            <NavIcon icon={<FaBook size="28"/>} tooltip='Diary'/>
            <NavIcon icon={<FaDumbbell size="28"/>} tooltip='Workouts'/>
            <NavIcon icon={<IoPerson size="28"/>} tooltip='Account'/>
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
