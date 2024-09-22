'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SideOptions({ closeSidebar }) {
    const pathname = usePathname();
    return (
        <div>
            <Link href="/home">
                <p onClick={closeSidebar} className={`px-3 py-2  text-charcoal text-lg transition ease-in duration-200 cursor-pointer  ${pathname === '/home' ? 'bg-light-blue-active-pro font-semibold ' : ' hover:bg-light-blue-active'} `}>
                    Home
                </p>
            </Link>
            <Link href="/about">
                <p onClick={closeSidebar} className={`px-3 py-2  text-charcoal text-lg transition ease-in duration-200  cursor-pointer ${pathname === '/about' ? 'bg-light-blue-active-pro font-semibold' : ' hover:bg-light-blue-active'} `}>
                    About Us
                </p>
            </Link>
            <Link href="/services">
                <p onClick={closeSidebar} className={`px-3 text-charcoal text-lg py-2  transition ease-in duration-200   cursor-pointer ${pathname === '/qualification' ? 'bg-light-blue-active-pro font-semibold' : ' hover:bg-light-blue-active'} `}>
                    Services
                </p>
            </Link>
            <Link href="/contact">
                <p onClick={closeSidebar} className={`px-3 text-charcoal text-lg py-2  transition ease-in duration-200  cursor-pointer  ${pathname === '/contact' ? 'bg-light-blue-active-pro font-semibold' : ' hover:bg-light-blue-active'} `}>
                    Contact Us
                </p>
            </Link>
        </div>
    )
} 