'use client';

const FileInput = ({ error, onChange, placeholder }) => {
  const handleChange = (e) => {
    const file = e.target.files[0];
    onChange(file); 
  };

  return (
    <div className="flex mb-4 w-full flex-col">
      <p>{placeholder}:</p>
      <input
        type="file"
        onChange={handleChange}
        className="bg-white h-9 rounded-sm leading-8 border-none outline-none focus:outline-none focus:border-none"
      />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default FileInput;
