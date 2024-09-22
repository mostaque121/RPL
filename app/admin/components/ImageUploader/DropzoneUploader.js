'use client';
import axios from 'axios';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { AiOutlineClose, AiOutlineCloudUpload } from 'react-icons/ai'; // Import the icons

const DropzoneUploader = ({ fileUrl,setFileUrl,setPublicId, preset }) => {
  const [progress, setProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onDrop = useCallback(async (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (!file) return;

    setIsUploading(true);
    setErrorMessage('');

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', preset);

    try {
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/dbneycd8g/image/upload',
        formData,
        {
          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            setProgress(percentCompleted);
          },
        }
      );

      setFileUrl(response.data.secure_url);
      setPublicId(response.data.public_id);
      setProgress(100);
    } catch (error) {
      console.error('Error uploading file:', error);
      setErrorMessage('File upload failed. Please try again.');
    } finally {
      setIsUploading(false);
    }
  }, []);

  const handleDelete = async () => {
    try {
      setFileUrl(null);
      setPublicId(null);
      setProgress(0);
    } catch (error) {
      console.error('Error deleting file:', error);
      setErrorMessage('File deletion failed. Please try again.');
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="flex flex-col w-full items-center py-4">
      {fileUrl ? (
        <div className="relative w-full max-w-xs mt-4">
          <img
            src={fileUrl}
            alt="Uploaded file"
            className=" w-full rounded-lg shadow-lg"
          />
          <button
            onClick={handleDelete}
            className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-1 hover:bg-opacity-75"
            aria-label="Remove uploaded image"
          >
            <AiOutlineClose size={20} />
          </button>
        </div>
      ) : (
        <div
          {...getRootProps({
            className: `cursor-pointer border-2 p-6 w-full max-w-md text-center transition-all duration-300 ease-in-out 
            ${isDragActive ? 'border-green-500 bg-green-50' : 'border-dashed border-gray-300 hover:border-blue-500 hover:bg-blue-50'}
          }`,
          })}
        >
          <input {...getInputProps()} aria-label="Upload file" />
          <AiOutlineCloudUpload className="mx-auto text-gray-400" size={40} />
          <p className="text-gray-600 mt-2">
            {isDragActive ? 'Drop the files here...' : 'Drag & drop some files here'}
          </p>
          <button
            type="button"
            className="mt-4 py-2 px-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Click to select files
          </button>
        </div>
      )}

      {errorMessage && (
        <p className="text-red-500 mt-2">{errorMessage}</p>
      )}

      {isUploading && progress > 0 && (
        <div className="relative mt-4 w-full max-w-md h-4 bg-gray-200 rounded overflow-hidden">
          <div
            className="h-full bg-blue-500 transition-all duration-300 ease-in-out"
            style={{ width: `${progress}%` }}
          />
          <p className="absolute inset-0 flex items-center justify-center text-charcoal text-sm">{progress}%</p>
        </div>
      )}
    </div>
  );
};

export default DropzoneUploader;

