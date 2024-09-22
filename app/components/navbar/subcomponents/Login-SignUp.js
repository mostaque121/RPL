'use client'
import Link from "next/link"
export default function Login_SignUp ({closeMenu}){
return (
    <div>
        <div className="flex gap-1 sm:gap-3">
            <Link href="/login" onClick={closeMenu} className="text-dark-gray hover:underline">
                Login
            </Link>
            <Link href="/signup" onClick={closeMenu} className="text-dark-gray hover:underline">
                Signup
            </Link>
        </div>
    </div>
)
}