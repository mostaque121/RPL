'use client'
import { useState } from 'react';
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle the active index
  };

  const faqs = [
    {
      question: "What does Recognition of Prior Learning (RPL) involve?",
      answer: "Recognition of Prior Learning (RPL) is a process that allows individuals to have their existing skills, knowledge, and experiences recognized formally. This can help in earning qualifications without needing to undergo extensive additional training."
    },
    {
      question: "Who can apply for RPL?",
      answer: "Individuals who have relevant work experience, informal or formal training, or other learning experiences related to the qualification they are pursuing are generally eligible for RPL."
    },
    {
      question: "What types of prior learning can be acknowledged through RPL?",
      answer: "RPL can acknowledge various types of prior learning, including professional experience, volunteer work, community involvement, and previous formal education or training."
    },
    {
      question: "How is the RPL evaluation process carried out?",
      answer: "The RPL evaluation typically involves reviewing evidence such as work samples, references, and relevant documentation. In some cases, it may also include interviews or practical demonstrations."
    },
    {
      question: "What documents should I prepare for an RPL assessment?",
      answer: "You should prepare documents that demonstrate your relevant skills and experience. This may include resumes, job descriptions, certificates, work samples, and reference letters."
    },
    {
      question: "What are the costs associated with RPL assessment?",
      answer: "The cost of an RPL assessment can vary based on the qualification and the assessing organization. It's advisable to inquire directly with the RPL provider for detailed pricing information."
    },
    {
      question: "How long does it typically take to complete the RPL process?",
      answer: "The duration of the RPL process can vary. Generally, it takes several weeks to a few months, depending on the complexity of the application and the qualification being assessed."
    },
    {
      question: "Can I use RPL to achieve a qualification or certification?",
      answer: "Yes, RPL can be used to obtain full or partial qualifications or certifications, depending on the assessment outcomes and the qualification requirements."
    },
    {
      question: "How does RPL differ from credit transfer?",
      answer: "RPL evaluates informal and formal learning that has not been previously recognized, while credit transfer pertains to formal qualifications you have already earned and are seeking to transfer to another program or institution."
    },
    {
      question: "Is RPL accepted by all educational institutions and employers?",
      answer: "While many educational institutions and employers recognize RPL, it's important to verify with the specific institution or employer to confirm their acceptance of RPL assessments."
    },
    {
      question: "What are the advantages of undergoing RPL?",
      answer: "RPL can offer several benefits, including saving time and money by reducing the need for additional coursework, providing formal recognition of your existing skills, and potentially improving your career opportunities."
    },
    {
      question: "Can RPL assist with obtaining a job or a promotion?",
      answer: "Yes, achieving qualifications through RPL can enhance your qualifications, making you a more competitive candidate for job opportunities or promotions that require specific certifications."
    },
    {
      question: "How should I prepare for an RPL assessment?",
      answer: "Preparation involves gathering and organizing evidence of your prior learning, such as work samples and references, and reflecting on how your experiences align with the qualifications you are seeking."
    },
    {
      question: "Is support available for those going through the RPL process?",
      answer: "Many RPL providers offer support and guidance throughout the assessment process. You can usually find information and assistance from the RPL provider or their support team."
    },
    {
      question: "How frequently can I apply for RPL?",
      answer: "You can typically apply for RPL as needed, though some providers may have specific guidelines or limitations on how often you can submit applications."
    },
    {
      question: "How can I get in touch with an RPL expert?",
      answer: "To speak with an RPL expert, you can contact the RPL provider directly through their website, email, or phone. They can provide detailed information and answer any specific questions you might have."
    },
    {
      question: "What steps are involved in applying for RPL?",
      answer: "The application process for RPL usually involves submitting an application form, providing evidence of your prior learning, and undergoing an assessment to determine if you meet the qualification requirements."
    }
  ];

  return (
    <div className="bg-white p-8 max-w-4xl mx-auto">
      <h1 className="sm:text-4xl text-xl font-bold text-center mb-8">Frequently Asked Questions</h1>

      {faqs.map((faq, index) => (
        <div key={index} className="mb-4 border-b pb-4">
          <h3
            className="sm:text-xl text-lg font-semibold cursor-pointer flex justify-between items-center"
            onClick={() => toggleFAQ(index)}
          >
            {faq.question}
            <span>{activeIndex === index ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}</span>
          </h3>

          {activeIndex === index && (
            <p className="mt-4 text-base sm:text-lg">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
