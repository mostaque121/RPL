'use client';
import { useState } from 'react';
import { MdExpandLess, MdExpandMore } from 'react-icons/md'; // Import the icons

const Units = ({ coreUnits,electiveUnits }) => {
    const [isCoreUnitsOpen, setCoreUnitsOpen] = useState(false);
    const [isElectiveUnitsOpen, setElectiveUnitsOpen] = useState(false);

    return (
        <div className='pt-8'>
            <h1 className="text-2xl font-bold mb-4">Units</h1>

            <div className="mb-4">
                <h2 
                    className="text-xl font-semibold cursor-pointer mb-2 flex items-center"
                    onClick={() => setCoreUnitsOpen(!isCoreUnitsOpen)}
                >
                    Core Units
                    {isCoreUnitsOpen ? (
                        <MdExpandLess className="ml-2" />
                    ) : (
                        <MdExpandMore className="ml-2" />
                    )}
                </h2>
                {isCoreUnitsOpen && (
                    <div>
                        <div className='text-sm' dangerouslySetInnerHTML={{ __html: coreUnits }} />
                    </div>
                )}
            </div>

            <div>
                <h2 
                    className="text-xl font-semibold cursor-pointer mb-2 flex items-center"
                    onClick={() => setElectiveUnitsOpen(!isElectiveUnitsOpen)}
                >
                    Elective Units
                    {isElectiveUnitsOpen ? (
                        <MdExpandLess className="ml-2" />
                    ) : (
                        <MdExpandMore className="ml-2" />
                    )}
                </h2>
                {isElectiveUnitsOpen && (
                    <div>
                        <div className='text-sm' dangerouslySetInnerHTML={{ __html: electiveUnits }} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Units;
