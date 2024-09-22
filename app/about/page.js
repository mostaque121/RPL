import Link from 'next/link';

const AboutUs = () => {
  return (
    <div className="bg-white p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="mb-4">
          At [Your Company Name], our mission is to [briefly describe your mission or goal]. We are dedicated to [describe what you do, e.g., providing high-quality education, delivering exceptional customer service, etc.]. Our goal is to [explain your broader aim or vision].
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
        <p className="mb-4">
          We believe in [list your core values, e.g., integrity, innovation, customer satisfaction]. These values guide our actions and decisions, ensuring that we [explain how these values influence your work or company culture].
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p className="mb-4">
          Founded in [year], [Your Company Name] began with [briefly describe the origin or inspiration behind the company]. Over the years, we have [describe major milestones, achievements, or growth]. Our journey has been driven by [explain what motivates or inspires you].
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Meet the Team</h2>
        <p className="mb-4">
          Our team is composed of [describe your team or key personnel]. Each member brings unique expertise and passion to our work. [Optionally, include brief bios or roles of key team members].
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What Sets Us Apart</h2>
        <p className="mb-4">
          What distinguishes [Your Company Name] is [describe what makes you unique, such as innovative approaches, exceptional service, specific expertise, etc.]. We are committed to [explain how you stand out in your industry or field].
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <p className="mb-4">
          We’d love to hear from you! If you have any questions or would like to learn more about us, feel free to [describe how people can reach out, e.g., contact us through our website, social media, etc.].
        </p>
        <Link href="/contact">
          <span className="text-light-blue underline">Contact Us</span>
        </Link>
      </section>

      <p className="text-center text-sm mt-10">
        <Link href="/">Back to Home</Link>
      </p>
    </div>
  );
};

export default AboutUs;


  