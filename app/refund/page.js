import Link from 'next/link';

const RefundPolicy = () => {
  return (
    <div className="bg-white p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">Refund Policy</h1>

      <p className="mb-4">
        At [Your Website Name], we strive to provide the best experience possible. If you are not satisfied with your purchase or service, please review our refund policy below.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">1. Refund Eligibility</h2>
      <p className="mb-4">
        To be eligible for a refund, you must meet the following criteria:
        <ul className="list-disc list-inside ml-5">
          <li>The request for a refund must be made within [X] days of the purchase or service.</li>
          <li>Products or services must be unused and in the original condition.</li>
          <li>Proof of purchase, such as a receipt or order confirmation, must be provided.</li>
        </ul>
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">2. Non-Refundable Items</h2>
      <p className="mb-4">
        Certain items or services are non-refundable, including:
        <ul className="list-disc list-inside ml-5">
          <li>Customized or personalized products</li>
          <li>Downloadable software or digital content</li>
          <li>Services already rendered</li>
        </ul>
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">3. Refund Process</h2>
      <p className="mb-4">
        To request a refund, follow these steps:
        <ul className="list-disc list-inside ml-5">
          <li>Contact our customer service team at [support email] with your order details and reason for the refund request.</li>
          <li>Our team will review your request and provide further instructions.</li>
          <li>If approved, the refund will be processed to your original payment method within [X] business days.</li>
        </ul>
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">4. Exchange Policy</h2>
      <p className="mb-4">
        Exchanges are available under the same conditions as refunds. If you wish to exchange an item, please contact our customer service team with your order details and the item you would like to receive in exchange.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">5. Shipping Costs</h2>
      <p className="mb-4">
        Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund amount, unless the return is due to our error.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">6. Changes to This Refund Policy</h2>
      <p className="mb-4">
        We may update our Refund Policy from time to time. Any changes will be posted on this page, and we encourage you to review it periodically to stay informed about our policies.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact Us</h2>
      <p className="mb-4">
        If you have any questions or concerns about our Refund Policy, please contact us at:
        <ul className="list-disc list-inside ml-5">
          <li>Email: support@yourwebsite.com</li>
          <li>Phone: +123 456 7890</li>
        </ul>
      </p>

      <p className="text-center text-sm mt-10">
        <Link href="/">Back to Home</Link>
      </p>
    </div>
  );
};

export default RefundPolicy;
