import Link from 'next/link';

const TermsAndConditions = () => {
  return (
    <div className="bg-white p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">Terms and Conditions</h1>
      
      <p className="mb-4">
        Welcome to [Your Website Name]! By accessing or using our website, you agree to comply with and be bound by the following terms and conditions of use. If you disagree with any part of these terms, you must not use our website.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">1. Intellectual Property</h2>
      <p className="mb-4">
        The content, design, layout, look, appearance, and graphics on this website are owned by or licensed to us. Unauthorized use of any materials may give rise to a claim for damages and/or be a criminal offense.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">2. User Responsibilities</h2>
      <p className="mb-4">
        When using our website, you agree not to:
      </p>
      <ul className="list-disc list-inside ml-5 mb-4">
        <li>Engage in any unlawful or fraudulent activities.</li>
        <li>Upload or distribute viruses or any harmful technology.</li>
        <li>Attempt to gain unauthorized access to the website, accounts, or systems.</li>
        <li>Use our content for commercial purposes without permission.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">3. Limitation of Liability</h2>
      <p className="mb-4">
        We are not liable for any damages that arise from the use or inability to use this website, including but not limited to indirect or consequential damages, loss of data, or loss of profits.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">4. Third-Party Links</h2>
      <p className="mb-4">
        Our website may contain links to third-party websites that are not controlled by us. We have no responsibility for the content or practices of these websites, and you access them at your own risk.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">5. Changes to Terms</h2>
      <p className="mb-4">
        We reserve the right to change or modify these terms at any time. Your continued use of the website after any changes constitute acceptance of the new terms. We recommend that you review these terms periodically.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">6. Termination</h2>
      <p className="mb-4">
        We may terminate or suspend access to our website immediately, without prior notice or liability, for any reason whatsoever, including if you breach the terms.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">7. Governing Law</h2>
      <p className="mb-4">
        These terms are governed by and construed in accordance with the laws of [Your Country], and you agree to submit to the exclusive jurisdiction of the courts in that location.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">8. Contact Us</h2>
      <p className="mb-4">
        If you have any questions about these Terms and Conditions, please contact us at:
      </p>
      <ul className="list-disc list-inside ml-5 mb-4">
        <li>Email: support@yourwebsite.com</li>
        <li>Phone: +123 456 7890</li>
      </ul>

      <p className="text-center text-sm mt-10">
        <Link href="/">Back to Home</Link>
      </p>
    </div>
  );
};

export default TermsAndConditions;
