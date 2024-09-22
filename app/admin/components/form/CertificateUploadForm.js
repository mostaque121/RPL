'use client';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import ClipLoader from 'react-spinners/ClipLoader';
import DropzoneUploader from '../ImageUploader/DropzoneUploader';
import SelectService from '../input/SelectService';
import SelectIndexCertificate from '../input/selectIndexCertificate';

const CKEditorComponent = dynamic(() => import('@/app/admin/components/input/CKEditorComponent'), {
  ssr: false
});


const CertificateUploadForm = ({ availableServices, mode, initialData }) => {
  const router = useRouter()
  const [loading, setLoading] = useState(false);
  const [service, setService] = useState(mode === 'edit' ? initialData.service._id || '' : '');
  const [title, setTitle] = useState(mode === 'edit' ? initialData.title || '' : '');
  const [fileUrlSquare, setFileUrlSquare] = useState(mode === 'edit' ? initialData.imageSquareLink || '' : '');
  const [publicIdSquare, setPublicIdSquare] = useState(mode === 'edit' ? initialData.imageSquarePublicId || '' : '');
  const [fileUrlCover, setFileUrlCover] = useState(mode === 'edit' ? initialData.imageCoverLink || '' : '');
  const [publicIdCover, setPublicIdCover] = useState(mode === 'edit' ? initialData.imageCoverPublicId || '' : '');
  const [description, setDescription] = useState(mode === 'edit' ? initialData.description || '' : '');
  const [jobOpportunity, setJobOpportunity] = useState(mode === 'edit' ? initialData.jobOpportunity || '' : '');
  const [entryRequirement, setEntryRequirement] = useState(mode === 'edit' ? initialData.entryRequirement || '' : '');
  const [packagingRule, setPackagingRule] = useState(mode === 'edit' ? initialData.packagingRule || '' : '');
  const [coreUnits, setCoreUnits] = useState(mode === 'edit' ? initialData.coreUnits || '' : '');
  const [electiveUnits, setElectiveUnits] = useState(mode === 'edit' ? initialData.electiveUnits || '' : '');
  const [selectedIndex, setSelectedIndex] = useState(mode === 'edit' ? initialData.index || '' : '');

  const selectedObject = availableServices.find((obj) => obj._id === service);

  const isFormValid = () => {
    return service && title && fileUrlSquare && fileUrlCover && publicIdCover && publicIdSquare && description && jobOpportunity && entryRequirement && packagingRule && coreUnits && electiveUnits && selectedIndex;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isFormValid()) {
      toast.error('Please fill in all required fields.');
      return;
    }

    setLoading(true);

    const payload = {
      service,
      title,
      imageSquareLink: fileUrlSquare || null,
      imageSquarePublicId: publicIdSquare || null,
      imageCoverLink: fileUrlCover || null,
      imageCoverPublicId: publicIdCover || null,
      description,
      jobOpportunity,
      entryRequirement,
      packagingRule,
      coreUnits,
      electiveUnits,
      index: selectedIndex
    };

    // Include id in the payload if in edit mode
    if (mode === 'edit' && initialData._id) {
      payload.id = initialData._id;
    }

    try {
      const res = await fetch('/api/admin/certificates', {
        method: mode === 'edit' ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const result = await res.json();
      toast.success(`${mode === 'edit' ? 'Edit' : 'Submission'} successful!`);

    } catch (error) {
      console.error('Error posting data:', error);
      toast.error(`${mode === 'edit' ? 'Edit' : 'Submission'} failed. Please try again.`);
    } finally {
      if (mode === 'upload') {
        setService('');
        setTitle('');
        setFileUrlSquare('');
        setPublicIdSquare('');
        setFileUrlCover('');
        setPublicIdCover('');
        setDescription('');
        setJobOpportunity('');
        setEntryRequirement('');
        setPackagingRule('');
        setCoreUnits('');
        setElectiveUnits('');
        setSelectedIndex('');
      }
      setLoading(false);
    }
  };


  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-md max-w-3xl">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Certificate Uploader</h1>

      <div className="mb-6">
        <label className="text-xl font-medium text-gray-700 mb-2">Certificate Title:</label>
        <input
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter certificate title"
        />
      </div>

      <div className="mb-6">
        <label className="text-xl font-medium text-gray-700 mb-2">Service:</label>
        <SelectService
          availableServices={availableServices}
          selectedService={service}
          setSelectedService={setService}
        />
      </div>

      {selectedObject && (
        <div className='mb-6'>
          <h2 className='text-xl font-medium text-gray-700 mb-2'>Service Index:</h2>
          <SelectIndexCertificate
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
            service={selectedObject}
            prevService={initialData.service._id}
            mode={mode}
          />
        </div>
      )}

      <div className="mb-6">
        <label className="text-xl font-medium text-gray-700 mb-2">Square Image:</label>
        <DropzoneUploader
          fileUrl={fileUrlSquare}
          setFileUrl={setFileUrlSquare}
          preset={"certificate-square"}
          setPublicId={setPublicIdSquare}
        />
      </div>

      <div className="mb-6">
        <label className="text-xl font-medium text-gray-700 mb-2">Cover Image:</label>
        <DropzoneUploader
          fileUrl={fileUrlCover}
          setFileUrl={setFileUrlCover}
          preset={"certificate-cover"}
          setPublicId={setPublicIdCover}
        />
      </div>

      <div className="mb-6">
        <label className="text-xl font-medium text-gray-700 mb-2">Description:</label>
        <CKEditorComponent
          value={description}
          onChange={(data) => setDescription(data)}
        />
      </div>

      <div className="mb-6">
        <label className="text-xl font-medium text-gray-700 mb-2">Job Opportunities:</label>
        <CKEditorComponent
          value={jobOpportunity}
          onChange={(data) => setJobOpportunity(data)}
        />
      </div>

      <div className="mb-6">
        <label className="text-xl font-medium text-gray-700 mb-2">Entry Requirements:</label>
        <CKEditorComponent
          value={entryRequirement}
          onChange={(data) => setEntryRequirement(data)}
        />
      </div>

      <div className="mb-6">
        <label className="text-xl font-medium text-gray-700 mb-2">Packaging Rule:</label>
        <CKEditorComponent
          value={packagingRule}
          onChange={(data) => setPackagingRule(data)}
        />
      </div>

      <div className="mb-6">
        <label className="text-xl font-medium text-gray-700 mb-2">Core Units:</label>
        <CKEditorComponent
          value={coreUnits}
          onChange={(data) => setCoreUnits(data)}
        />
      </div>

      <div className="mb-6">
        <label className="text-xl font-medium text-gray-700 mb-2">Elective Units:</label>
        <CKEditorComponent
          value={electiveUnits}
          onChange={(data) => setElectiveUnits(data)}
        />
      </div>


      <button
        onClick={handleSubmit}
        className={`w-full px-6 py-2 rounded-md transition duration-300 ease-in-out
          ${isFormValid() && !loading ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-300 text-gray-500 cursor-not-allowed'}`}
        disabled={!isFormValid() || loading}
      >
        {loading ? <div className='flex items-center justify-center gap-3'><ClipLoader color="#fff" size={20} /> <p>Uploading...</p></div> : 'Submit'}
      </button>
    </div>
  );
};

export default CertificateUploadForm;
