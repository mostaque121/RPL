'use client'
import axios from 'axios';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { RxCross1 } from "react-icons/rx";

export default function AccountCreationForm({userName,setUserName,password,setPassword,uploadedImageUrl,setUploadedImageUrl,imagePublicId,setImagePublicId,handleAccountCreation}) {
  const [showPassword, setShowPassword] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Handle avatar upload
  const handleAvatarChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'avatar'); // Replace with your Cloudinary upload preset

      setIsUploading(true);
      setUploadProgress(0);

      try {
        const response = await axios.post(
          'https://api.cloudinary.com/v1_1/dbneycd8g/image/upload', // Replace with your Cloudinary URL
          formData,
          {
            onUploadProgress: (progressEvent) => {
              const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
              setUploadProgress(percentCompleted);
            },
          }
        );

        // Set the uploaded image URL
        setUploadedImageUrl(response.data.secure_url);
        setImagePublicId(response.data.public_id)
        setIsUploading(false);
      } catch (error) {
        console.error('Error uploading avatar:', error);
        setIsUploading(false);
      }
    }
  };

  // Handle image removal
  const handleRemoveImage = () => {
    setUploadedImageUrl('');
    setImagePublicId('')
    setUploadProgress(0);
  };


  return (
    <form onSubmit={handleAccountCreation} className="space-y-4">
      <div>
        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
          Username
        </label>
        <input
          id="username"
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Choose a username"
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
          placeholder="Create a password"
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

      <div>
        <label htmlFor="avatar" className="block text-sm font-medium text-gray-700">
          Avatar (Optional)
        </label>
        <input
          id="avatar"
          type="file"
          onChange={handleAvatarChange}
          className="mt-1 block w-full  border border-gray-300 rounded-md text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-600 hover:file:bg-indigo-100"
        />
        {isUploading && (
          <div className="mt-2">
            <div className="bg-gray-200 rounded-full h-2 w-full">
              <div
                className="bg-indigo-600 h-2 rounded-full"
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600 mt-1">{uploadProgress}%</p>
          </div>
        )}
        {uploadedImageUrl && (
          <div className='flex justify-center'>
            <div className="mt-4 relative">
                <img src={uploadedImageUrl} alt="Uploaded avatar" className="w-24 h-24 object-cover" />
                <button
                type="button"
                onClick={handleRemoveImage}
                className="text-red-600 absolute top-0 right-0 "
                >
                <RxCross1 className='bg-slate-200 hover:bg-slate-300' />
                </button>
            </div>
          </div>
        )}
      </div>

      <button
        type="submit"
        className={`w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300 ${isUploading ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={isUploading}
      >
        Create Account
      </button>
    </form>
  );
}
