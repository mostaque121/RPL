'use client';
import { signIn } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { RxCross2 } from "react-icons/rx";

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        if (isOpen) {
            // Prevent scrolling by adding a class to the body
            document.body.style.overflow = 'hidden';
        } else {
            // Restore scrolling when the modal is closed
            document.body.style.overflow = 'auto';
        }
        return () => {
            // Clean up the style in case the component unmounts
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <div>
            <button
                onClick={openModal}
                className="bg-blue-500 mt-5 text-white block mx-auto px-3 py-2 rounded-md hover:scale-95 active:scale-90 transition-all duration-300 ease-in-out"
            >
                Write a review
            </button>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    {/* Modal content */}
                    <div className="bg-white p-6 rounded-md shadow-lg relative">
                        <div className='max-h-[80vh] py-5 overflow-y-auto'>
                            <h3 className='text-xl mb-5 text-blue-500'>You need an account to post a review</h3>
                            <div className='flex gap-2 items-center cursor-pointer w-full justify-center bg-light-blue hover:bg-light-blue-hover active:bg-light-blue-active rounded-md py-1'>
                                <FcGoogle className='w-5 h-5' />
                                <p className='text-lg' onClick={() => signIn('google')}>Sign in with Google</p>
                            </div>

                            <div className='flex gap-2 mt-3 items-center cursor-pointer w-full justify-center bg-light-blue hover:bg-light-blue-hover active:bg-light-blue-active rounded-md py-1'>
                                <FaFacebookSquare className='w-5 h-5' />
                                <p className='text-lg'>Continue with Facebook</p>
                            </div>
                        </div>
                        {/* Close button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-gray-500 hover:scale-105 hover:bg-light-gray-hover active:bg-light-gray-active transition-all ease-in-out duration-300 rounded-sm"
                        >
                           <RxCross2 className='w-5 h-5' />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Modal;
