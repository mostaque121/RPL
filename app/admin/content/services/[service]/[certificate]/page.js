import Units from "@/app/components/qualifications/Units";
import fetchData from "@/app/lib/fetchData";
import Image from "next/image";

export default async function Page({ params }) {
    const { certificate } = params;
    const nextUrl = process.env.NEXT_PUBLIC_API_URL
    if (!nextUrl) {
        return null;
    }
    const data = await fetchData(`${nextUrl}/api/certificates/${certificate}`);
    return (data &&
        <div className="qualification max-w-4xl mx-auto">

            <div>
                <div className="relative">
                    <Image src={data.imageCoverLink} alt="image" width={1500} height={720} />
                </div>
            </div>

            <h1 className="md:text-4xl sm:px-5 px-3 max-w-3xl sm:text-xl text-lg mx-auto mt-5 py-5 text-center font-semibold"> {data.title}</h1>

            <div className="px-3 sm:px-6 md:px-10" >
                <h1 className="text-base sm:text-lg md:text-2xl font-semibold mt-8 mb-2 text-charcoal">Qualification description</h1>
                <div className="text-dark-gray text-sm" dangerouslySetInnerHTML={{ __html: data.description }} />
            </div>

            <div className="px-3 sm:px-6 md:px-10"  >
                <h1 className="text-base sm:text-lg md:text-2xl font-semibold mt-8 mb-2 text-charcoal">Job Opportunities</h1>
                <div className="text-dark-gray text-sm" dangerouslySetInnerHTML={{ __html: data.jobOpportunity }} />
            </div>

            <div className="px-3 sm:px-6 md:px-10"  >
                <h1 className="text-base sm:text-lg md:text-2xl font-semibold mt-8 mb-2 text-charcoal">Entry Requirements</h1>
                <div className="text-dark-gray text-sm" dangerouslySetInnerHTML={{ __html: data.entryRequirement }} />
            </div>

            <div className="px-3 sm:px-6 md:px-10" >
                <h1 className="text-base sm:text-lg md:text-2xl font-semibold mt-8 mb-2 text-charcoal">Packaging Rules</h1>
                <div className="text-dark-gray text-sm" dangerouslySetInnerHTML={{ __html: data.packagingRule }} />
            </div>

            <div className="px-3 sm:px-6 md:px-10" >
                <Units coreUnits={data.coreUnits} electiveUnits={data.electiveUnits} />
            </div>

        </div>
    );
};
