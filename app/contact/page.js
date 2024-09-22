import Link from 'next/link';

const ContactUs = () => {
  return (
    <div className="bg-white p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <p className="mb-4">
          We’d love to hear from you! Whether you have questions, feedback, or just want to say hello, please feel free to reach out to us using the contact form below or through our contact details.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Contact Form</h2>
        <form
          action="/api/contact" // Adjust the action URL based on your backend setup
          method="post"
          className="space-y-4"
        >
          <div className="flex flex-col mb-4">
            <label htmlFor="name" className="mb-2 font-semibold">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="border border-gray-300 p-2 rounded"
            />
          </div>
          
          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="mb-2 font-semibold">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="border border-gray-300 p-2 rounded"
            />
          </div>
          
          <div className="flex flex-col mb-4">
            <label htmlFor="message" className="mb-2 font-semibold">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              className="border border-gray-300 p-2 rounded resize-none"
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="bg-blue-500 block mx-auto text-white py-2 px-4 rounded font-semibold hover:scale-95 transition-all duration-200 ease-in-out hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Contact Details</h2>
        <p className="mb-4">
          You can also reach us through the following methods:
        </p>
        <ul className="list-disc list-inside ml-5">
          <li className="mb-2">
            <strong>Email:</strong> contact@yourwebsite.com
          </li>
          <li className="mb-2">
            <strong>Phone:</strong> +123 456 7890
          </li>
          <li className="mb-2">
            <strong>Address:</strong> 123 Main Street, City, Country, 12345
          </li>
        </ul>
      </section>

      <section className="text-center mt-10">
        <Link href="/" className="text-blue-500 underline">
          Back to Home
        </Link>
      </section>
    </div>
  );
};

export default ContactUs;

