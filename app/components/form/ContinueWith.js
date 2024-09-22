'use client'
import { signIn } from 'next-auth/react';
import { FaApple, FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
export default function ContinueWith () {
    return(
      <div className="mt-4 flex flex-col space-y-3">
        <button className="flex items-center justify-center w-full h-12 bg-gray-100 rounded-lg hover:bg-gray-200 transition duration-300">
        <FcGoogle className="mr-3 text-2xl" />
        <span onClick={() => signIn('google')} className="text-sm font-medium">Continue with Google</span>
        </button>
        <button className="flex items-center justify-center w-full h-12 bg-gray-100 rounded-lg hover:bg-gray-200 transition duration-300">
        <FaFacebookF className="text-blue-600 mr-3 text-xl" />
        <span className="text-sm font-medium">Continue with Facebook</span>
        </button>
        <button className="flex items-center justify-center w-full h-12 bg-gray-100 rounded-lg hover:bg-gray-200 transition duration-300">
        <FaApple className="text-gray-900 mr-3 text-xl" />
        <span className="text-sm font-medium">Continue with Apple</span>
        </button>
      </div>
    )
}