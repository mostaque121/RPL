import Link from 'next/link';

const PrivacyPolicy = () => {
  return (
    <div className="bg-white p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">Privacy Policy</h1>
      
      <p className="mb-4">
        At [Your Website Name], we are committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this policy carefully to understand our views and practices regarding your personal data and how we will treat it.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
      <div className="mb-4">
        <p>We may collect and process the following data about you:</p>
        <ul className="list-disc list-inside ml-5">
          <li>Personal identification information (Name, email address, phone number, etc.)</li>
          <li>Technical data, including IP addresses, browser types, and versions</li>
          <li>Usage data including browsing actions and patterns on our website</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
      <div className="mb-4">
        <p>We use the information we collect in the following ways:</p>
        <ul className="list-disc list-inside ml-5">
          <li>To provide and maintain our service</li>
          <li>To notify you about changes to our service</li>
          <li>To provide customer support</li>
          <li>To monitor usage and improve the performance of our website</li>
          <li>To send promotional information, such as newsletters, if you have opted-in</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Protect Your Data</h2>
      <p className="mb-4">
        We use administrative, technical, and physical security measures to help protect your personal information. However, no method of transmission over the internet or method of electronic storage is 100% secure, and we cannot guarantee its absolute security.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">4. Sharing Your Information</h2>
      <div className="mb-4">
        <p>We do not sell or trade your personal data. However, we may share your information with:</p>
        <ul className="list-disc list-inside ml-5">
          <li>Service providers who perform services on our behalf (e.g., payment processing, analytics)</li>
          <li>If required by law, to comply with a legal obligation</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4">5. Cookies</h2>
      <p className="mb-4">
        Our website uses cookies to improve your experience. Cookies are small files that are stored on your device and allow us to recognize your browser and capture certain information. You can choose to disable cookies through your browser settings, but this may affect the functionality of our website.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">6. Your Rights</h2>
      <div className="mb-4">
        <p>Under certain circumstances, you have the following data protection rights:</p>
        <ul className="list-disc list-inside ml-5">
          <li>The right to access – You have the right to request copies of your personal data.</li>
          <li>The right to rectification – You have the right to request correction of any information you believe is inaccurate.</li>
          <li>The right to erasure – You have the right to request that we delete your personal data, under certain conditions.</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4">7. Changes to This Privacy Policy</h2>
      <p className="mb-4">
        We may update our Privacy Policy from time to time. Any changes will be posted on this page, and we encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your data.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">8. Contact Us</h2>
      <div className="mb-4">
        <p>If you have any questions about this Privacy Policy, please contact us at:</p>
        <ul className="list-disc list-inside ml-5">
          <li>Email: privacy@yourwebsite.com</li>
          <li>Phone: +123 456 7890</li>
        </ul>
      </div>

      <p className="text-center text-sm mt-10">
        <Link href="/">Back to Home</Link>
      </p>
    </div>
  );
};

export default PrivacyPolicy;
