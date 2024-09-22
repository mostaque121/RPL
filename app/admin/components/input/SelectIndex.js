'use client';
import { useEffect } from "react";

const SelectIndex = ({ availableItems, selectedIndex, setSelectedIndex, mode }) => {

    const maxIndex = availableItems.length > 0
        ? Math.max(...availableItems.map((item) => item.index))
        : 0;
    const nextIndex = maxIndex + 1;

    // Determine the default index based on mode
    const defaultIndex = mode === 'upload' && !selectedIndex ? nextIndex : selectedIndex;
    useEffect(() => {
        if (mode === 'upload' && !selectedIndex) {
            setSelectedIndex(nextIndex);
        }
    }, [mode, selectedIndex, setSelectedIndex, nextIndex]);

    const handleChange = (e) => {
        setSelectedIndex(e.target.value);
    };

    return (
        <div className="w-full">
            <select
                id="service"
                name="service"
                value={defaultIndex}
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
                        {/* Conditionally render the nextIndex option only in upload mode */}
                        {mode === 'upload' && (
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

export default SelectIndex;

