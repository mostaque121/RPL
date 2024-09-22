'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const SidebarItemWithDropdown = ({ icon, label, isOpen, subItems }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <div
        onClick={toggleDropdown}
        className="flex items-center justify-between cursor-pointer p-2 hover:bg-gray-700 rounded-md"
      >
        <div className="flex items-center">
          <span className="text-xl">{icon}</span>
          {isOpen && <span className="ml-4">{label}</span>}
        </div>
        {isOpen && (
          <span className="ml-auto text-xl">
            {isDropdownOpen ? <FaAngleUp /> : <FaAngleDown />}
          </span>
        )}
      </div>

      {/* Sub-items dropdown */}
      {isDropdownOpen && isOpen && (
        <div className="ml-8 flex flex-col space-y-2">
          {subItems.map((subItem, index) => (
            <Link href={subItem.href} key={index}>
              <div className="flex items-center h-8 p-2 hover:bg-gray-600 rounded-md">
                <span>{subItem.label}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarItemWithDropdown;
