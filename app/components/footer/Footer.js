'use client'
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
const Footer = () => {
  const pathname = usePathname();
  const isAdminPath = pathname.startsWith('/admin');
    return ( !isAdminPath &&
        <div>
<footer className="bg-dark-gray px-3 sm:px-5 text-white py-8">
  <div className=" grid md:grid-cols-4 grid-cols-2 gap-5">
    {/* About Section */}
    <div>
      <h3 className="text-lg font-semibold">About Us</h3>
      <p className="text-sm">We help you get recognized for your skills through the RPL process, empowering your career and personal growth.</p>
      <Link href="/about" className="text-light-blue">Learn More</Link>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="text-lg font-semibold">Quick Links</h3>
      <div className="text-sm space-y-2">
        <p><Link href="/home">Home</Link></p>
        <p><Link href="/enroll">Enroll Now</Link></p>
        <p><Link href="/courses">Courses</Link></p>
        <p><Link href="/testimonials">Testimonials</Link></p>
        <p><Link href="/faq">FAQs</Link></p>
        <p><Link href="/contact">Contact Us</Link></p>
      </div>
    </div>

    {/* Support Section */}
    <div>
      <h3 className="text-lg font-semibold">Support</h3>
      <div className="text-sm space-y-2">
        <p><Link href="/help-center">Help Center</Link></p>
        <p><Link href="/terms">Terms & Conditions</Link></p>
        <p><Link href="/privacy">Privacy Policy</Link></p>
        <p><Link href="/refund">Refund Policy</Link></p>
      </div>
    </div>

    {/* Contact Section */}
    <div>
      <h3 className="text-lg font-semibold">Contact Us</h3>
      <div className="text-sm space-y-2">
        <p>Phone: +61483921139</p>
        <p>Email: rplfasttrack@gmail.com</p>
        <p>Address: 123 RPL St, Learning City</p>
        <p>Mon-Fri: 9am - 6pm</p>
      </div>
    </div>
  </div>



  {/* Bottom Section */}
  <div className="mt-8 flex flex-col items-center gap-8 md:flex-row md:justify-between">
      {/* Newsletter Signup */}
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-xl font-semibold mb-2">Subscribe to our Newsletter</h3>
        <form className="flex">
          <input
            type="email"
            placeholder="Your email"
            className="p-3 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-light-blue transition duration-300"
          />
          <button
            type="submit"
            className="bg-light-blue text-charcoal p-3 rounded-r-md hover:bg-light-blue-hover transition duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Social Media Links */}
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
        <div className="flex gap-4">
          <a
            href="#"
            className="text-light-blue hover:scale-105 hover:text-light-blue-hover transition duration-300"
          >
            <FaFacebook className="w-8 h-8 md:w-10 md:h-10" />
          </a>
          <a
            href="#"
            className="text-light-blue hover:scale-105 hover:text-light-blue-hover transition duration-300"
          >
            <FaTwitter className="w-8 h-8 md:w-10 md:h-10" />
          </a>
          <a
            href="#"
            className="text-light-blue hover:scale-105 hover:text-light-blue-hover transition duration-300"
          >
            <FaLinkedin className="w-8 h-8 md:w-10 md:h-10" />
          </a>
          <a
            href="#"
            className="text-light-blue hover:scale-105 hover:text-light-blue-hover transition duration-300"
          >
            <FaInstagram className="w-8 h-8 md:w-10 md:h-10" />
          </a>
        </div>
      </div>
    </div>



{/* Footer Bottom */}
<div className="text-center text-sm mt-8">
  <p>&copy; 2024 RPL Fast Track Website. All Rights Reserved.</p>
  <p className="mt-2">
    Designed and developed by <a href="#" target="_blank" rel="noopener noreferrer" className="text-light-blue">Mostaque Ahmad</a>.
  </p>
</div>

</footer>

        </div>
    );
};

export default Footer;