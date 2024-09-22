'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavOptions() {
    const pathname = usePathname();
    return (
        <div className='flex gap-2'>
            <Link href="/home">
                <p className={`px-2 py-1 text-charcoal transition ease-in duration-200 cursor-pointer rounded-md ${pathname === '/home' ? 'bg-light-blue-active font-semibold ' : ' hover:bg-light-blue-active'} `}>
                    Home
                </p>
            </Link>
            <Link href="/about">
                <p className={`px-2 py-1 text-charcoal transition ease-in duration-200 rounded-md cursor-pointer ${pathname === '/about' ? 'bg-light-blue-active font-semibold' : ' hover:bg-light-blue-active'} `}>
                    About Us
                </p>
            </Link>
            <Link href="/services">
                <p className={`px-2 text-charcoal py-1 transition ease-in duration-200  rounded-md cursor-pointer ${pathname === '/qualification' ? 'bg-light-blue-active font-semibold' : ' hover:bg-light-blue-active'} `}>
                    Services
                </p>
            </Link>
            <Link href="/contact">
                <p className={`px-2 text-charcoal py-1 transition ease-in duration-200  cursor-pointer rounded-md ${pathname === '/contact' ? 'bg-light-blue-active font-semibold' : ' hover:bg-light-blue-active'} `}>
                    Contact Us
                </p>
            </Link>
        </div>
    )
} 