'use client'
import { useState } from 'react';

const HelpCenter = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleSection = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle the active index
  };

  const sections = [
    {
      title: "Frequently Asked Questions",
      content: (
        <div>
          <p>Find answers to the most common questions about our services and products.</p>
          <ul className="list-disc list-inside ml-5">
            <li><a href="/faq">Go to FAQ page</a></li>
          </ul>
        </div>
      )
    },
    {
      title: "User Guides",
      content: (
        <div>
          <p>Access detailed guides and tutorials to help you use our services effectively.</p>
          <ul className="list-disc list-inside ml-5">
            <li><a href="/guides/getting-started">Getting Started</a></li>
            <li><a href="/guides/advanced-features">Advanced Features</a></li>
          </ul>
        </div>
      )
    },
    {
      title: "Troubleshooting",
      content: (
        <div>
          <p>Find solutions to common issues you might encounter.</p>
          <ul className="list-disc list-inside ml-5">
            <li><a href="/troubleshooting">Troubleshooting Tips</a></li>
          </ul>
        </div>
      )
    },
    {
      title: "Contact Support",
      content: (
        <div>
          <p>If you need further assistance, please reach out to our support team.</p>
          <ul className="list-disc list-inside ml-5">
            <li>Email: <a href="mailto:support@yourwebsite.com">support@yourwebsite.com</a></li>
            <li>Phone: +123 456 7890</li>
            <li><a href="/contact">Contact Form</a></li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <div className="bg-white p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">Help Center</h1>

      {sections.map((section, index) => (
        <div key={index} className="mb-6 border-b pb-4">
          <h2
            className="text-3xl font-semibold cursor-pointer flex justify-between items-center"
            onClick={() => toggleSection(index)}
          >
            {section.title}
            <span>{activeIndex === index ? '-' : '+'}</span>
          </h2>

          {activeIndex === index && (
            <div className="mt-4 text-lg">
              {section.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HelpCenter;
