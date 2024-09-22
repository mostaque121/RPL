import { FaBolt, FaHandsHelping, FaUserTie } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import { GiBullseye } from "react-icons/gi";
import { MdVerifiedUser } from "react-icons/md";

const features = [
  {
    id: 1,
    icon: <FaUserTie className="sm:h-16 h-12 w-12 sm:w-16 text-blue-500" />,
    title: 'Expert Guidance',
    description: 'Our experienced RPL consultants provide personalized support throughout the entire process, ensuring a smooth and stress-free experience.',
  },
  {
    id: 2,
    icon: <FaBolt className="sm:h-16 h-12 w-12 sm:w-16 text-yellow-500" />,
    title: 'Fast and Efficient Process',
    description: 'We streamline the RPL process, making it quick and easy for you to receive certification.',
  },
  {
    id: 3,
    icon: <FaSackDollar className="sm:h-16 h-12 w-12 sm:w-16 text-green-500" />,
    title: 'Cost-Effective Solution',
    description: 'Avoid spending time and money on courses you don’t need. With our RPL services, you can save both by getting formal recognition for the skills.',
  },
  {
    id: 4,
    icon: <MdVerifiedUser className="sm:h-16 h-12 w-12 sm:w-16 text-purple-500" />,
    title: 'Nationally Recognized Certifications',
    description: 'The RPL certificates we provide are recognized across the industry, giving you the credentials needed to advance in your career or pursue new opportunities.',
  },
  {
    id: 5,
    icon: <FaHandsHelping className="sm:h-16 h-12 w-12 sm:w-16 text-red-500" />,
    title: 'Comprehensive Support',
    description: 'From consultation to certification, we are with you every step of the way. Our dedicated team is available to answer any questions.',
  },
  {
    id: 6,
    icon: <GiBullseye className="sm:h-16 h-12 w-12 sm:w-16 text-orange-500" />,
    title: 'Proven Success',
    description: 'We have a track record of successfully helping individuals gain RPL certification, enabling them to achieve their career goals faster.',
  },
];

const WhyChooseUs = () => {


  return (
    <div className='py-5 sm:mx-5 mx-3'>
      <h2 className='text-center text-3xl font-bold mb-5'>Why Choose Us</h2>
      <div className='rounded-md grid md:grid-cols-3 sm:grid-cols-2 gap-3 sm:gap-5'>
        {features.map((feature) => (
          <div
            key={feature.id}
            className='flex flex-col items-center p-6 rounded-md shadow-md bg-white'
          >
            {feature.icon}
            <h3 className='text-center py-3 text-lg sm:text-2xl font-semibold'>{feature.title}</h3>
            <p className='text-base sm:text-lg text-gray-600'>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;

