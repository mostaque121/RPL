import HappyClient from "@/app/components/content/ClientSay";
import UserReview from "@/app/components/content/UserReview";
import QualificationResponseForm from "@/app/components/qualifications/Form-Qualifications";
import Units from "@/app/components/qualifications/Units";
import fetchData from "@/app/lib/fetchData";
import ScrollReveal from "@/app/lib/ScrollReveal";
import { MdOutlineNavigateNext } from "react-icons/md";

export async function generateStaticParams() {
    const nextUrl = process.env.NEXT_PUBLIC_API_URL
    if (!nextUrl) {
        return null;
    }
    try {
        const allCertificate = await fetch(`${nextUrl}/api/certificates`).then((res) => res.json());

        return allCertificate.data.map((certificate) => ({
            certificate: certificate.link,
        }));
    } catch (error) {
        console.error("Error fetching services:", error);
        return [];
    }

}

export default async function Page({ params }) {
    const nextUrl = process.env.NEXT_PUBLIC_API_URL
    if (!nextUrl) {
        return null;
    }
    const { certificate } = params;
    const data = await fetchData(`${nextUrl}/api/certificates/${certificate}`);
    return (data &&
        <div className="qualification ">

            <div className="bg-light-blue px-3 sm:px-6 md:px-10 pt-10 pb-10">
                <div className="flex flex-col md:flex-row gap-8 justify-center" >
                    <div >
                        <h1 className="text-4xl text-charcoal font-semibold">{data.title}</h1>
                        <div className="mt-2">
                            <span className="inline-block text-blue-500 hover:scale-95 active:scale-90 transition duration-200 ease-in-out cursor-pointer hover:text-blue-600">Qualification</span>
                            <span className="inline-block  align-middle"><MdOutlineNavigateNext /></span>
                            <span className="inline-block text-blue-500 hover:scale-95 active:scale-90 transition duration-200 ease-in-out cursor-pointer hover:text-blue-600">{data.service.title}</span>
                            <span className="inline-block align-middle"><MdOutlineNavigateNext /></span>
                            <span className="inline-block text-dark-gray font-semibold align-middle">{data.title}</span>
                        </div>
                        <p className="mt-5 text-charcoal mb-3">Advance your career by applying for a {data.title} through Recognition of Prior Learning with RPL Fast Track, our streamlined service designed to fast-track your qualification.</p>
                        <img src={data.imageCoverLink} className="w-full rounded-md h-auto"></img>
                    </div>
                    <div>
                        <button className="block mx-auto mb-8 bg-blue-500 hover:bg-blue-600 hover:scale-95 transition duration-300 ease-in-out active:bg-blue-700 active:scale-90 rounded-md mt-5 text-white px-3 py-2 sm:px-5 sm:py-3 text-lg sm:text-xl font-semibold">
                            Enroll Now
                        </button>
                        <QualificationResponseForm title={data.title} />
                    </div>
                </div>
            </div>
            <ScrollReveal initial={{ opacity: 0, rotateY: 90 }} animate={{ opacity: 1, rotateY: 0 }}>
                <div className="px-3 sm:px-6 md:px-10" >
                    <h1 className="text-2xl font-semibold mt-8 mb-2 text-charcoal">Qualification description</h1>
                    <div className="text-dark-gray text-sm" dangerouslySetInnerHTML={{ __html: data.description }} />
                </div>
            </ScrollReveal>
            <div className="px-3 sm:px-6 md:px-10"  >
                <h1 className="text-2xl font-semibold mt-8 mb-2 text-charcoal">Job Opportunities</h1>
                <div className="text-dark-gray text-sm" dangerouslySetInnerHTML={{ __html: data.jobOpportunity }} />
            </div>

            <div className="px-3 sm:px-6 md:px-10"  >
                <h1 className="text-2xl font-semibold mt-8 mb-2 text-charcoal">Entry Requirements</h1>
                <div className="text-dark-gray text-sm" dangerouslySetInnerHTML={{ __html: data.entryRequirement }} />
            </div>

            <div className="px-3 sm:px-6 md:px-10" >
                <h1 className="text-2xl font-semibold mt-8 mb-2 text-charcoal">Packaging Rules</h1>
                <div className="text-dark-gray text-sm" dangerouslySetInnerHTML={{ __html: data.packagingRule }} />
            </div>

            <div className="px-3 sm:px-6 md:px-10" >
                <Units coreUnits={data.coreUnits} electiveUnits={data.electiveUnits} />
            </div>

            <div className="px-3 sm:px-6 md:px-10" >
                <HappyClient />
            </div>

            <div className="px-3 sm:px-6 md:px-10 bg-light-blue">
                <UserReview />
            </div>

        </div>
    );
};

