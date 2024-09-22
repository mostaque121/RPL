"use client"; // Necessary to enable client-side features
import Link from "next/link";
import { useState } from "react";
import { FaBell, FaSignInAlt, FaSignOutAlt, FaUserCircle } from "react-icons/fa";

const AdminNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // For login/logout toggle

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLoginLogout = () => {
    setIsLoggedIn(!isLoggedIn); // Toggle login/logout state
  };

  return (
    <nav className="bg-black text-white px-4 py-2 flex justify-between items-center shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-4">
        <img src="/logoadmin.jpg" alt="Admin Logo" className="h-10" /> {/* Replace with your logo */}
      </div>

      {/* Middle Navigation Items */}
      <div className="sm:flex hidden items-center space-x-4">
        <span className="text-xl font-bold">Admin Panel</span>
      </div>

      {/* Right Icons and Profile */}
      <div className="flex items-center space-x-4">
        {/* Notifications */}
        <button className="relative focus:outline-none">
          <FaBell className="text-xl" />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>

        {/* User Profile / Login */}
        {isLoggedIn ? (
          <div className="relative">
            <button onClick={toggleDropdown} className="flex items-center focus:outline-none">
              <FaUserCircle className="text-2xl" />
              <span className="ml-2 hidden md:block">Admin</span>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-10">
                <Link href="/admin/profile" className="block px-4 py-2 hover:bg-gray-100">
                  Profile
                </Link>
                <button
                  onClick={handleLoginLogout}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  <FaSignOutAlt className="inline-block mr-2" /> Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={handleLoginLogout}
            className="flex items-center focus:outline-none hover:text-gray-400"
          >
            <FaSignInAlt className="text-xl mr-2" />
            <span>Login</span>
          </button>
        )}
      </div>
    </nav>
  );
};

export default AdminNavbar;

