'use client'
import Link from 'next/link';
import { useState } from 'react';
import { FaApple, FaEye, FaEyeSlash, FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('No account found for this email.');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
      {/* Error Message */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded relative mb-4" role="alert">
          <span className="block sm:inline">{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="you@example.com"
            required
          />
        </div>

        <div className="relative">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            id="password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your password"
            required
          />
          <button
            type="button"
            className="absolute top-9 right-3 flex items-center text-gray-600"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
        >
          Sign In
        </button>
      </form>

      <div className="mt-6 flex items-center justify-center">
        <span className="text-sm text-gray-500">or continue with</span>
      </div>

      <div className="mt-4 flex flex-col space-y-3">
        <button className="flex items-center justify-center w-full h-12 bg-gray-100 rounded-lg hover:bg-gray-200 transition duration-300">
          <FcGoogle className="mr-3 text-2xl" />
          <span className="text-sm font-medium">Continue with Google</span>
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

      <div className="mt-6 text-center">
        <Link href="/forgot-password" passHref>
          <p className="text-sm text-indigo-600 hover:underline cursor-pointer">
            Forgot your password?
          </p>
        </Link>
      </div>
    </div>
  </div>
  );
};

export default LoginForm;
