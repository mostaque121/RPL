'use client'
import { useState } from "react";
import { IoReorderThreeOutline, IoSearchOutline } from "react-icons/io5";
import Sidebar from "../Sidebar";
import Logo from "./Logo";
import NavOptions from "./NavOptions";
import SearchBar from "./SearchBar";
import UserContainer from "./UserContainer";

export default function LowerBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const closeSidebar = () => {
        setIsOpen(false);
    };

    const toggleSearch = () => {
        setSearchOpen(!searchOpen);
    };

    return (
        <div className="px-3 sm:px-5 py-2 relative">
            {/* Sidebar with overlay */}
            <div className={`fixed md:hidden h-screen transition-all duration-200 ease-in-out z-[100] max-w-[330px] w-full top-0 ${isOpen ? "left-0" : "-left-[330px]"}`}>
                <Sidebar closeSidebar={closeSidebar} />
            </div>

            {/* Overlay */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-60 z-50" 
                    onClick={closeSidebar} 
                />
            )}

            {/* Apply non-selectable and non-clickable class when sidebar is open */}
            <div className={`flex justify-between items-center relative  ${isOpen ? 'pointer-events-none select-none' : ''}`}>
                <Logo />
                <div className="hidden md:block">
                    <NavOptions />
                </div>
                <div className="flex items-center gap-3">
                    <UserContainer />
                    <IoSearchOutline 
                        onClick={toggleSearch} 
                        className=" text-charcoal hover:scale-90 transition-all ease-out duration-200 active:scale-75 cursor-pointer w-7 h-7" 
                    />
                    <IoReorderThreeOutline 
                        onClick={toggleSidebar} 
                        className="md:hidden text-charcoal hover:scale-90 transition-all ease-out duration-200 active:scale-75 cursor-pointer w-12 h-12 block" 
                    />
                </div>
            </div>
            {searchOpen && (
                <SearchBar />
            )}
        </div>
    );
}

