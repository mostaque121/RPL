'use client';
import axios from 'axios';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const ImageUploaderService = ({setPublicId,setImage}) => {
  const [progress, setProgress] = useState(0);
  const [fileUrl, setFileUrl] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onDrop = useCallback(async (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (!file) return;
    
    setIsUploading(true);
    setErrorMessage('');

    // Prepare FormData to upload to Cloudinary
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'service');

    try {
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/dbneycd8g/image/upload',
        formData,
        {
          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            setProgress(percentCompleted); // Update progress state
          },
        }
      );

      // File uploaded successfully, save the URL and public_id
      setFileUrl(response.data.secure_url);
      setImage(response.data.secure_url);
      setPublicId(response.data.public_id);
      setProgress(100); // Set progress to 100% after upload completes
    } catch (error) {
      console.error('Error uploading file:', error);
      setErrorMessage('File upload failed. Please try again.');
    } finally {
      setIsUploading(false);
    }
  }, []);

  const handleDelete = async () => {
    if (!publicId) return;

    try {
      await axios.post(
        'https://api.cloudinary.com/v1_1/dbneycd8g/image/destroy', // Cloudinary delete URL
        {
          data: {
            public_id: publicId,
            type: 'upload', // Adjust based on the type of resource you are deleting
          },
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      // Clear the URL and publicId after successful deletion
      setFileUrl(null);
      setPublicId(null);
      setProgress(0); // Reset progress
    } catch (error) {
      console.error('Error deleting file:', error);
      setErrorMessage('File deletion failed. Please try again.');
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="flex flex-col items-center p-4">
      {/* Dropzone Area */}
      <div
        {...getRootProps({
          className: `cursor-pointer border-2 p-4 text-center ${
            isDragActive ? 'border-green-500 bg-green-100' : 'border-dashed border-gray-400'
          }`,
        })}
      >
        <input {...getInputProps()} aria-label="Upload file" />
        <p className="text-gray-700">
          {isDragActive ? 'Drop the files here...' : 'Drag & drop some files here, or click to select files'}
        </p>
      </div>

      {/* Error Message */}
      {errorMessage && (
        <p className="text-red-500 mt-2">{errorMessage}</p>
      )}

      {/* Progress Bar */}
      {isUploading && progress > 0 && (
        <div className="relative mt-4 w-full max-w-md h-4 bg-gray-200 rounded overflow-hidden">
          <div
            className="h-full bg-green-500"
            style={{ width: `${progress}%` }}
          />
          <p className="absolute inset-0 flex items-center justify-center text-white text-sm">{progress}%</p>
        </div>
      )}

      {/* Show uploaded image or delete option */}
      {fileUrl && (
        <div className="mt-4 flex flex-col items-center">
          <img src={fileUrl} alt="Uploaded file" className="w-24 h-24 object-cover rounded-md shadow-md" />
          <button
            onClick={handleDelete}
            className="mt-2 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
          >
            Delete File
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageUploaderService;