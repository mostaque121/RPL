import { AiFillSafetyCertificate } from "react-icons/ai";
import { FaThumbsUp } from "react-icons/fa";
import { FaRankingStar } from "react-icons/fa6";
import { FiTrendingUp } from "react-icons/fi";
import { HiCurrencyDollar } from "react-icons/hi2";
import { IoIosBriefcase, IoIosClock, IoMdCompass } from "react-icons/io";
import { LiaSlidersHSolid } from "react-icons/lia";
import { RiGraduationCapFill } from "react-icons/ri";
import BenefitsCard from "../components/card/BenefitsCard";
export default function Benefits() {

    const cardsData = [
        {
          Icon: FiTrendingUp,
          title: 'Career Advancement',
          description: "Recognition of Prior Learning (RPL) can fast-track your career progression by validating the skills and experience you've already acquired. This recognition makes you a stronger candidate for promotions or higher-level roles within your current field, helping you move forward faster. It also opens doors to new opportunities by showing employers that you are qualified without needing further education or training."
        },
        {
          Icon: HiCurrencyDollar,
          title: 'Cost-Effective',
          description: "One of the biggest advantages of RPL is that it saves you money. Traditional educational pathways often require taking courses on material you may already know. With RPL, you avoid paying for redundant classes or training, since your prior knowledge and experience are assessed and acknowledged. This financial efficiency allows you to invest those savings elsewhere in your personal or professional development."
        },
        {
          Icon: IoIosClock,
          title: 'Time-Saving',
          description: "RPL significantly reduces the time it takes to achieve formal qualifications. Since your existing skills and knowledge are recognized, you can bypass the usual coursework and lengthy programs. This is especially beneficial for individuals who need qualifications quickly to advance in their careers or meet job requirements. It’s a streamlined process that allows you to achieve your goals faster."
        },
        {
          Icon: AiFillSafetyCertificate,
          title: 'Skills Validation',
          description: "RPL offers formal validation of the skills and knowledge you've acquired over time. Whether through work experience, self-learning, or informal training, RPL turns your practical knowledge into recognized qualifications. This validation provides you with the same credentials as someone who has completed traditional educational pathways, giving you more credibility in your field."
        },
        {
          Icon: IoIosBriefcase,
          title: 'Increased Employability',
          description: "Having your skills formally recognized through RPL can make you more attractive to potential employers. In competitive job markets, having verified qualifications can make a significant difference. RPL enhances your resume by adding official certifications and credentials that showcase your abilities, increasing your chances of securing a job or advancing in your current position."
        },
        {
          Icon: RiGraduationCapFill,
          title: 'Access to Higher Education',
          description: "RPL can serve as a bridge to further education by recognizing your prior experience and learning as equivalent to certain entry requirements. For those looking to pursue higher education, RPL allows you to bypass foundational courses and move directly into advanced studies. This can be an excellent stepping stone for people seeking to continue their academic journey without starting from scratch."
        },
        {
          Icon: FaRankingStar,
          title: 'Industry Recognition',
          description: "RPL aligns your skills with recognized industry standards, making you more competitive in your field. By meeting the criteria set by industry-specific qualifications, you can demonstrate that you possess the relevant skills required to excel in your sector. This industry recognition positions you as a credible and capable professional, leading to better career prospects."
        },
        {
          Icon: LiaSlidersHSolid,
          title: 'Flexible Assessment',
          description: "The RPL process is highly adaptable, allowing your unique experiences and learning to be assessed on an individual basis. Instead of following a one-size-fits-all approach, RPL assessors take into account your specific skills, knowledge, and experiences. This flexibility ensures that your assessment is tailored to what you know, making the process more relevant and personalized."
        },
        {
          Icon: IoMdCompass,
          title: 'Transition to New Careers',
          description: "RPL can open doors to entirely new career paths by recognizing transferable skills. If you're looking to switch industries, RPL provides a way to demonstrate your qualifications in a new field without starting over. By using your existing skills and applying them to a different industry, RPL helps facilitate career transitions and broadens your employment opportunities"
        },
        {
          Icon: FaThumbsUp,
          title: 'Boosts Confidence',
          description: "Being formally recognized for your skills and knowledge can boost your confidence and sense of achievement. RPL not only provides you with tangible qualifications but also validates the hard work and experience you've accumulated over time. This recognition can empower you to take on new challenges, seek promotions, or explore new career opportunities with renewed self-assurance."
        },
      ];

    return (
        <div className="px-5 mt-5">
            <h1 className="text-3xl  text-center">Benefits of RPL</h1>
            <div className="mt-8 md:grid md:grid-cols-2 gap-5">
      {cardsData.map((card, index) => (
        <BenefitsCard 
          key={index}
          Icon={card.Icon}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
        </div>
    );
  }