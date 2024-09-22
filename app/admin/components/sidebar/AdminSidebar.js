'use client';
import { useState } from 'react';
import { FaCloudUploadAlt, FaCogs, FaGlobe, FaHome, FaSignOutAlt, FaUsers } from 'react-icons/fa';
import { GrNext, GrPrevious } from "react-icons/gr";
import SidebarItem from './SidebarItem';
import SidebarItemWithDropdown from './SidebarItemWithDropdown';

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`flex bg-black flex-col h-full ${isOpen ? 'w-64' : 'w-20'} bg-gray-800 text-white transition-all duration-300`}>
      <div className="flex items-center justify-end p-3 sm:p-4 bg-gray-900">
        <button onClick={toggleSidebar} className="text-x">
          {isOpen ? <GrPrevious /> : <GrNext />}
        </button>
      </div>

      <nav className="flex flex-col p-3 sm:p-4 space-y-4">
        {/* Sidebar items without sub-items */}
        <SidebarItem href="/admin" icon={<FaHome />} label="Home" isOpen={isOpen} />
        <SidebarItem href="/admin/users" icon={<FaUsers />} label="Users" isOpen={isOpen} />
        <SidebarItem href="/admin/settings" icon={<FaCogs />} label="Settings" isOpen={isOpen} />
        <SidebarItem href="/admin/logout" icon={<FaSignOutAlt />} label="Logout" isOpen={isOpen} />

        {/* Sidebar item with sub-items (Dropdown) */}
        <SidebarItemWithDropdown
          icon={<FaCloudUploadAlt />}
          label="Upload"
          isOpen={isOpen}
          subItems={[
            { href: '/admin/upload/service', label: 'Service' },
            { href: '/admin/upload/certificate', label: 'Certificate' },
          ]}
        />
        <SidebarItemWithDropdown
          icon={<FaGlobe />}
          label="Content"
          isOpen={isOpen}
          subItems={[
            { href: '/admin/content/services', label: 'Service' },
          ]}
        />
      </nav>
    </div>
  );
};

export default AdminSidebar;


