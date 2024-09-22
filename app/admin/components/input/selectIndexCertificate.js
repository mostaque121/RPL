'use client';
import { useEffect } from "react";

const SelectIndexCertificate = ({ service, prevService, selectedIndex, setSelectedIndex, mode }) => {

    const availableItems = service.certificates;
    const maxIndex = availableItems.length > 0
        ? Math.max(...availableItems.map((item) => item.index))
        : 0;
    const nextIndex = maxIndex + 1;

    // Determine the default index based on mode and service comparison
    const shouldShowNextIndex =
        mode === 'upload' || (mode === 'edit' && prevService !== service._id);

    useEffect(() => {
        // For upload mode, or when service changes in edit mode
        if (shouldShowNextIndex && !selectedIndex) {
            setSelectedIndex(nextIndex);
        }
    }, [shouldShowNextIndex, selectedIndex, setSelectedIndex, nextIndex]);

    const handleChange = (e) => {
        setSelectedIndex(Number(e.target.value));
    };

    return (
        <div className="w-full">
            <select
                id="service"
                name="service"
                value={selectedIndex || ""}
                onChange={handleChange}
                className="w-full px-4 h-10 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                {/* If there are no available items, show only the nextIndex option */}
                {availableItems.length === 0 ? (
                    <option value={nextIndex} className="bg-blue-100 font-bold">
                        {nextIndex} (New Index)
                    </option>
                ) : (
                    <>
                        <option value="">Choose an index</option>
                        {availableItems.map((item) => (
                            <option key={item._id} value={item.index}>
                                {item.index}. {item.title}
                            </option>
                        ))}
                        {/* Conditionally render the nextIndex option */}
                        {shouldShowNextIndex && (
                            <option value={nextIndex} className="bg-blue-100 font-bold">
                                {nextIndex} (New Index)
                            </option>
                        )}
                    </>
                )}
            </select>
        </div>
    );
};

export default SelectIndexCertificate;
