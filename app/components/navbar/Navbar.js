'use client';
import { signOut, useSession } from 'next-auth/react'; // Next-auth imports
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from "react";
import { FaUserCircle } from 'react-icons/fa'; // Icon for default avatar
import { IoReorderThreeOutline } from "react-icons/io5";
import { MdCall } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for avatar dropdown

    const pathname = usePathname();
    const isAdminPath = pathname.startsWith('/admin');
    const { data: session } = useSession(); // Access session from next-auth
    console.log(session)

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown visibility
    };

    const handleLogout = () => {
        signOut();
        closeMenu();
        setIsDropdownOpen(false); // Close dropdown after logout
    };

    return (!isAdminPath &&
        <div className="flex flex-col md:flex-row items-center justify-between px-3 sm:px-5 py-3 bg-light-blue relative">
            <Link href='/home'>
                <div className='w-40 sm:w-48'>
                    <img src='/logo.png' alt="Logo" />
                </div>
            </Link>

            <div>
                <div 
                    className={`absolute md:gap-1 list-none z-50 top-14 right-0 shadow-lg md:shadow-none w-60 bg-light-blue flex-col md:flex-row md:relative md:items-center md:w-auto md:top-auto md:right-auto  ${
                        isOpen ? "flex" : "hidden"
                    } md:flex `}>
                    
                    <Link href="/home" onClick={closeMenu}>
                        <p className={`px-4 py-1 text-dark-gray text-lg cursor-pointer sm:rounded-md ${pathname ==='/home' ? 'bg-light-blue-active ' : ' hover:bg-light-blue-hover'} active:bg-light-blue-active`}>
                            Home
                        </p>
                    </Link>
                    <Link href="/about" onClick={closeMenu}>
                        <p className={`px-4 py-1 text-dark-gray text-lg sm:rounded-md cursor-pointer ${pathname ==='/about' ? 'bg-light-blue-active' : ' hover:bg-light-blue-hover'} active:bg-light-blue-active`}>
                            About Us
                        </p>
                    </Link>
                    <Link href="/qualification" onClick={closeMenu}>
                        <p className={`px-4 text-dark-gray py-1 text-lg sm:rounded-md cursor-pointer ${pathname ==='/qualification' ? 'bg-light-blue-active' : ' hover:bg-light-blue-hover'} active:bg-light-blue-active`}>
                            Qualification
                        </p>
                    </Link>
                    <Link href="/contact" onClick={closeMenu}>
                        <p className={`px-4 text-dark-gray py-1 text-lg cursor-pointer sm:rounded-md ${pathname ==='/contact' ? 'bg-light-blue-active ' : ' hover:bg-light-blue-hover'} active:bg-light-blue-active`}>
                            Contact Us
                        </p>
                    </Link>

                    <div className='ml-5 hidden md:flex flex-col text-dark-gray justify-center items-center'>
                        <h3 className='text-sm'>Call Now</h3>
                        <div className='flex gap-1 items-center'>
                            <MdCall className='text-blue-500' />
                            <h1 className='text-blue-500 cursor-pointer hover:underline'>+61483921139</h1>
                        </div>
                    </div>

                    {/* Authentication Section */}
                    <div className="flex items-center md:ml-6">
                        {!session ? (
                            // If user is not logged in, show Login/Signup
                            <div className="flex gap-3">
                                <Link href="/login" onClick={closeMenu} className="text-dark-gray hover:underline">
                                    Login
                                </Link>
                                <Link href="/signup" onClick={closeMenu} className="text-dark-gray hover:underline">
                                    Signup
                                </Link>
                            </div>
                        ) : (
                            // If user is logged in, show avatar and logout option
                            <div className="relative">
                                <button className="flex items-center focus:outline-none" onClick={toggleDropdown}>
                                    {session.user.image ? (
                                        <img src={session.user.image} alt="Avatar" className="w-8 h-8 rounded-full" />
                                    ) : (
                                        <div className="bg-gray-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                                            {session.user.name ? session.user.name.charAt(0).toUpperCase() : <FaUserCircle />}
                                        </div>
                                    )}
                                </button>
                                
                                {/* Dropdown menu for Logout */}
                                {isDropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-50">
                                        <p className="px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100" onClick={handleLogout}>
                                            Logout
                                        </p>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className='flex items-center md:hidden mt-2 md:mt-0'>
                <div className=' flex flex-col text-dark-gray mr-5 justify-center items-center'>
                    <h3 className='text-sm'>Call Now</h3>
                    <div className='flex gap-1 items-center'>
                        <MdCall className='text-blue-500' />
                        <h1 className='text-blue-500 text-sm cursor-pointer hover:underline'>+61483921139</h1>
                    </div>
                </div>

                <div className="cursor-pointer" onClick={toggleMenu} aria-expanded={isOpen}>
                    {isOpen ? <RxCross2 className="w-8 h-8" /> : <IoReorderThreeOutline className="w-8 h-8" />}
                </div>
            </div>
        </div>
    );
}
