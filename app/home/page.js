import Link from 'next/link';
import HappyClient from '../components/content/ClientSay';
import UserReview from '../components/content/UserReview';
import Response from '../components/form/Response';
import PopularCourse from '../components/Home/PopularCourse';
import RPLProcess from '../components/Home/ProcessOfRpl';
import WhyChooseUs from '../components/Home/WhyChooseUs';
import ScrollReveal from '../lib/ScrollReveal';

export default function Home (){
    return(
        <div className="relative bg-light-blue pb-2">
            <div className="relative bg-white px-3 sm:px-5 py-5 bg-cover h-[600px] bg-center" style={{ backgroundImage: `url('/RPL-Certification.jpg')` }}>
            <div className="absolute inset-0 bg-black opacity-60"></div>

            <div className='relative flex gap-10 w-full justify-between h-full'>
                <div className="flex w-full h-full items-center py-8 md:py-0 justify-center flex-col">
                    <h1 className="text-light-blue text-xl sm:text-4xl font-medium text-center">
                        "Unlock new career opportunities – Enroll now with RPL to have your skills recognized and take the next step in your professional journey!"
                    </h1>
                    <Link href='/enroll'>
                        <button className="bg-light-blue hover:bg-light-blue-hover hover:scale-95 transition duration-300 ease-in-out active:bg-light-blue-active active:scale-90 rounded-md mt-8 text-dark-gray px-3 py-2 sm:px-5 sm:py-3 text-lg sm:text-xl font-semibold">
                        Enroll Now
                        </button>
                    </Link>
                </div>
                <div  className='md:flex hidden items-center'>
                    <Response />
                </div>
            </div>
            </div>

            <div className='md:hidden w-full'>
                <Response />
            </div>

            <ScrollReveal initial={{ opacity: 0, rotateY: 90 }} animate={{ opacity: 1, rotateY: 0 }}>
            <div>
                <PopularCourse/>
            </div>
            </ScrollReveal>


            <div className="mx-3 sm:mx-5 my-5 rounded-md overflow-hidden flex justify-center items-center bg-white shadow-md">
                <div  className="md:block hidden w-full md:w-1/2 h-96">
                    <img className="w-full h-full object-cover"  src="/1_D7G69I9L9xka4AgnW1nn6w.jpg"></img>
                </div>
                <div className="md:w-1/2 w-full p-3">
                <h1 className="text-center  text-3xl">What is RPL ?</h1>
                <p className="sm:text-lg text-sm  mt-5">
                Recognition of Prior Learning (RPL) formalizes existing skills and knowledge, acquired through work, training, or other experiences. By assessing your competencies against industry standards, RPL fast-tracks your qualifications and advances your career without extra coursework. It efficiently leverages your experience, achieving certification, enhancing credentials, and opening new career opportunities. It's a streamlined process for career growth.{" "}
                <Link href="/rpl">
                <span className="text-deep-blue hover:underline cursor-pointer">Learn more..</span></Link>
                </p>
                </div>
            </div>


            <div className="flex mx-3 sm:mx-5 my-5 justify-center rounded-md overflow-hidden items-center bg-white shadow-md">
                <div  className="md:w-1/2 p-3 w-full">
                    <h1 className="text-3xl  text-center">Benefits of RPL</h1>
                    <p className="sm:text-lg text-sm  mt-5">Recognition of Prior Learning (RPL) accelerates your career by formally acknowledging your existing skills and experience, helping you gain qualifications more quickly. It enhances your job prospects and allows for career growth without additional coursework. Additionally, RPL is cost-effective and time-efficient, saving you money and reducing the time needed to achieve formal credentials compared to traditional education.{" "}
                    <Link href="/benefits">
                        <span className="text-deep-blue hover:underline cursor-pointer">Learn more..</span></Link></p>
                </div>

                <div className="w-1/2 h-96 md:block hidden">
                    <img className="w-full h-full object-cover" src="/pexels-fauxels-3182812-1024x683-1.jpg"></img>
                </div>
            </div>

            <div>
                <RPLProcess/>
            </div>

            <div>
                <WhyChooseUs/>
            </div>

            <div className='px-5 pb-8 bg-white'>
                <HappyClient/>
            </div>

            <div className='mx-5'>
                <UserReview/>
            </div>
           
        </div>
    )
}