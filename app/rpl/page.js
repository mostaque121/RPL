import { BsSignpostFill } from "react-icons/bs";
import { FaGraduationCap, FaHandsHelping, FaLightbulb } from "react-icons/fa";
import { FaPuzzlePiece } from "react-icons/fa6";
import { GiDiploma } from "react-icons/gi";
import { IoIosBriefcase } from "react-icons/io";
export default function RPL() {
    return (
      <div className="pt-5 px-5">
        <div className="bg-light-blue p-3 rounded-md">
            <h1 className="text-2xl mb-4 font-semibold text-center">What is Recognition of Prior Learning (RPL)?</h1>
            <p className="text-dark-gray text-lg">
            Recognition of Prior Learning (RPL) is a formal assessment process that acknowledges the skills, knowledge, and expertise you’ve gained throughout your life, whether through work experience, informal education, or other learning experiences. RPL evaluates your existing competencies against the qualifications required by industry standards, allowing you to earn formal recognition without the need to complete traditional coursework.
            RPL recognizes that learning can occur in many different environments, from hands-on experience in a job to self-taught skills, volunteer work, or professional training outside of academic institutions. It offers individuals the opportunity to transform this practical knowledge into recognized qualifications or certifications, providing tangible evidence of your skills. By undertaking RPL, you can obtain nationally recognized qualifications faster and at a lower cost than going through conventional educational pathways.
            </p>
        </div>

        <div className="bg-light-blue mt-5 pb-2 pt-2 px-3 rounded-md">
            <h1 className="text-2xl text-center my-5 font-semibold"> How Does RPL Work?</h1>
            <p className="text-dark-gray text-lg">The RPL process involves gathering evidence of your skills and experience, which can include work samples, references, reports, or even interviews. This evidence is then assessed against the specific competencies required for a particular qualification. A qualified assessor evaluates whether your current knowledge meets the necessary standards, and if so, awards you the relevant qualification.</p>
            <p className="text-lg text-dark-gray">The process can be flexible, allowing for different types of evidence, such as:</p>
            
            <div className="md:grid grid-cols-2 gap-5 my-5">
                <div className="flex flex-col items-center mb-5 md:mb-0 bg-white p-3 rounded-md">
                    <IoIosBriefcase className="w-16 h-16" />
                    <h1 className="text-xl font-semibold">Work experience</h1>
                    <p>This refers to the skills you've developed through your professional roles or freelance work. It highlights real-world application, showing how you've applied your abilities in a job setting. Employers value this because it demonstrates your capability to deliver results in a work environment. Whether it's managing projects, coding software, or leading a team, your work experience proves you have hands-on expertise.</p>
                </div>

                <div className="flex flex-col items-center mb-5 md:mb-0 rounded-md bg-white p-3">
                    <FaGraduationCap className="w-16 h-16" />
                    <h1 className="text-xl font-semibold">Training and development</h1>
                    <p>Training programs, whether formal (like degrees, certifications, or courses) or informal (on-the-job training, workshops), are key evidence of your commitment to skill-building. These programs give structure to your learning and can provide you with up-to-date knowledge in your field. They show you're proactive about growing your expertise and staying current with industry standards.</p>
                </div>
                <div className="flex flex-col items-center rounded-md mb-5 md:mb-0 bg-white p-3">
                    <FaLightbulb className="w-16 h-16" />
                    <h1 className="text-xl font-semibold">Self-learning</h1>
                    <p>Self-learning reflects your initiative to acquire new knowledge independently. Whether through online courses, research, or personal projects, this can demonstrate a deep passion for growth and self-improvement. Employers appreciate self-learners because they are typically resourceful, driven, and able to keep up with changing trends and technologies in their field.</p>
                </div>
                <div className="flex flex-col items-center mb-5 md:mb-0 rounded-md bg-white p-3">
                    <FaHandsHelping className="w-16 h-16" />
                    <h1 className="text-xl font-semibold">Volunteer work</h1>
                    <p>Volunteering allows you to gain experience outside a traditional work setting. Skills like leadership, project management, or even technical abilities can be sharpened through community service or nonprofit initiatives. Volunteer work reflects your adaptability and willingness to contribute your time and expertise to causes, while also enhancing your skillset in the process.</p>
                </div>
            </div>
        </div>

        <div className="my-5 pb-1 bg-light-blue px-3 rounded-md">
            <h1 className="text-2xl text-center py-5 font-semibold">Who Can Benefit from RPL?</h1>
            <p className="text-lg mb-4 text-dark-gray">RPL is particularly beneficial for:</p>
            <div className="flex items-center gap-5 p-3 mb-5 rounded-md bg-white">
            <GiDiploma className="w-20 h-20" />
            <div>
                <h1 className="font-semibold text-lg text-black">Professionals looking to formalize their experience :</h1>
                <p className="text-lg text-dark-gray"> If you've gained expertise on the job, RPL can convert that experience into a recognized qualification.</p>
            </div>
            </div>

            <div className="flex items-center mb-5 gap-5 p-3 rounded-md bg-white">
            <BsSignpostFill className="w-20 h-20" />
            <div>
                <h1 className="font-semibold text-lg text-black">Individuals changing careers :</h1>
                <p className="text-lg text-dark-gray"> If you're transitioning into a new field, RPL allows you to apply your existing knowledge and skills to a new qualification.</p>
            </div>
            </div>

            <div className="flex items-center mb-5 gap-5 p-3 rounded-md bg-white">
            <FaPuzzlePiece className="w-20 h-20" />
            <div>
                <h1 className="font-semibold text-lg text-black">People with informal or non-traditional learning backgrounds :</h1>
                <p className="text-lg text-dark-gray">RPL provides a pathway to recognition for those who have developed skills outside of formal education, whether through self-study, apprenticeships, or volunteer work.</p>
            </div>
            </div>
        </div>
      </div>
    );
  }