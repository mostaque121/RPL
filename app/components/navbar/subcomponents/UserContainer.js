'use client'
import { signOut, useSession } from 'next-auth/react';
import { useState } from 'react';
import Login_SignUp from './Login-SignUp';
import UserImage from './UserImage';
import UserOption from './UserOption';

export default function UserContainer() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { data: session } = useSession();

    const handleLogout = () => {
        signOut();
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div>
            {!session ? (
                <Login_SignUp />
            ) : (
                <div className="relative">
                    <button
                        className={`flex items-center rounded-full overflow-hidden ${isDropdownOpen && "outline-none transition duration-200 ease-in-out ring-2 ring-indigo-700"} `}
                        onClick={toggleDropdown}
                    >
                        <UserImage user={session.user} />
                    </button>

                    {isDropdownOpen && (
                        <div className="relative">
                            <div className="absolute z-50 -right-28 sm:-right-[120px] md:-right-14 top-3 bg-white shadow-lg rounded-lg">
                                <UserOption handleLogout={handleLogout} user={session.user} />
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}