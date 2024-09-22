'use client';

const SelectService = ({ availableServices, selectedService, setSelectedService }) => {
  const handleChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedService(selectedValue);
  };

  return (availableServices &&
    <div className="w-full">
      <select
        id="service"
        name="service"
        value={selectedService}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Choose a service</option>
        {availableServices.map((service) => (
          <option key={service._id} value={service._id}>
            {service.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectService;
