'use client'
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Import icons from react-icons

const RPLProcess = () => {
  const [activeStep, setActiveStep] = useState(null);

  const steps = [
    {
      id: 1,
      title: 'Step - 01',
      subtitle: 'Consultation',
      description: 'Schedule a consultation with our RPL experts. We\'ll discuss your goals and qualifications, guiding you through the process and outlining the evidence needed for your certificate.',
    },
    {
      id: 2,
      title: 'Step - 02',
      subtitle: 'Assessment of Existing Skills',
      description: 'Gather and prepare evidence of your prior learning, work experience, and relevant skills. This includes documents such as qualifications, work samples, employment records, and references.',
    },
    {
      id: 3,
      title: 'Step - 03',
      subtitle: 'Submit Application',
      description: 'Submit your application and evidence to our team for evaluation. We will review everything to ensure it aligns with the required standards.',
    },
    {
      id: 4,
      title: 'Step - 04',
      subtitle: 'Evaluation and Certification',
      description: 'Our assessors will evaluate your submitted evidence. Once approved, we will issue your RPL certificate, officially recognizing your prior learning and skills.',
    },
  ];

  const handleToggle = (id) => {
    setActiveStep(activeStep === id ? null : id);
  };

  return (
    <div className="bg-gray-50 py-10 px-3 sm:px-5 md:px-10  bg-white mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">How the RPL Process Works</h2>
      <div className="space-y-4">
        {steps.map((step) => (
          <div  key={step.id} className="border overflow-hidden rounded-lg shadow-lg bg-white">
            <button 
              onClick={() => handleToggle(step.id)} 
              className="w-full px-4 py-3 text-left flex items-center justify-between bg-light-blue text-charcoal font-semibold rounded-t-lg hover:bg-light-blue-dark focus:outline-none"
            >
              <div>
                <h3 className="text-xl">{step.title}</h3>
                <h4 className="text-lg font-medium text-light-blue-light">{step.subtitle}</h4>
              </div>
              <div>
                {activeStep === step.id ? (
                  <FaChevronUp className="w-5 h-5" />
                ) : (
                  <FaChevronDown className="w-5 h-5" />
                )}
              </div>
            </button>
            {activeStep === step.id && (
              <div className="p-4 text-gray-700">
                <p>{step.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RPLProcess;


