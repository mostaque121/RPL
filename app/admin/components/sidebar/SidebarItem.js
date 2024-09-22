'use client';
import Link from 'next/link';

const SidebarItem = ({ href, icon, label, isOpen }) => (
  <Link href={href}>
    <div className="flex items-center h-8 p-2 hover:bg-gray-700 rounded-md">
      <span className="text-xl">{icon}</span>
      {isOpen && <span className="ml-4">{label}</span>}
    </div>
  </Link>
);

export default SidebarItem;
