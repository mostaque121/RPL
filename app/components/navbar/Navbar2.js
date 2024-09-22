'use client'
import { usePathname } from 'next/navigation';
import LowerBar from "./subcomponents/LowerBar";
import UpperBar from "./subcomponents/UpperBar";
export default function Navbar() {
    const pathname = usePathname();
    const isAdminPath = pathname.startsWith('/admin');
    return (!isAdminPath &&
        <div className="bg-light-blue-hover">
            <div className="hidden md:block">
                <UpperBar />
            </div>
            <div>
                <LowerBar />
            </div>
        </div>
    )
}