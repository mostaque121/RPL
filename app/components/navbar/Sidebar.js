import { FaFacebookSquare, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import Logo from "./subcomponents/Logo";
import SideOptions from "./subcomponents/SideOptions";
export default function Sidebar ({closeSidebar}) {
    return (
        <div className="bg-light-blue-hover h-screen py-3">
            <div className="flex w-full h-full flex-col">
                <div className="flex pb-3 px-3 w-full items-center justify-between gap-5">
                    <Logo />
                    <RxCross2 onClick={closeSidebar} className="w-8 h-8 cursor-pointer duration-200 transition ease-in-out hover:scale-90 active:scale-75" />
                </div>
                <hr></hr>
                <div className="flex-1 overflow-y-auto">

                <div>
                    <SideOptions closeSidebar={closeSidebar}/>
                </div>

                <hr></hr>

                <div className="px-3 my-3 text-lg">
                    <p className="font-semibold">Call now</p>
                    <p className="text-blue-600 cursor-pointer hover:text-blue-700">+61483921139</p>
                </div>
                <div className="px-3 mb-3 text-lg">
                    <p className="font-semibold">Email</p>
                    <p className="text-blue-600 cursor-pointer hover:text-blue-700">rplfasttrack@gmail.com</p>
                </div>
                <div className="px-3 mb-3 text-lg">
                    <p className="font-semibold">Adress</p>
                    <p className="text-blue-600 cursor-pointer hover:text-blue-700">123 RPL St, Learning City</p>
                </div>

                <h1 className="font-semibold block mb-2 text-lg text-center">Connect With</h1>
                <div className="flex gap-1 justify-center px-3 items-center">
                    <div className="hover:scale-95 cursor-pointer active:scale-90 transition duration-200 ease-in-out">
                        <FaWhatsappSquare className="text-blue-600 hover:text-blue-700 transition duration-200 ease-in-out active:text-blue-800  w-8 h-8  " />
                    </div>
                    <div className="hover:scale-95 cursor-pointer active:scale-90 transition duration-200 ease-in-out">
                        <FaFacebookSquare className="text-blue-600 hover:text-blue-700 transition duration-200 ease-in-out active:text-blue-800  w-8 h-8  " />
                    </div>
                    <div className="hover:scale-95 cursor-pointer active:scale-90 transition duration-200 ease-in-out">
                        <FaLinkedin className="text-blue-600 hover:text-blue-700 transition duration-200 ease-in-out active:text-blue-800  w-8 h-8  " />
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}