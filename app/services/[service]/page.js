import CertificateCard from "@/app/components/card/CertificateCard";
import fetchData from "@/app/lib/fetchData";

export const revalidate = 60

export async function generateStaticParams() {
    const nextUrl = process.env.NEXT_PUBLIC_API_URL
    if (!nextUrl) {
        return [];
    }
    try {
        const allServices = await fetch(`${nextUrl}/api/services`).then((res) => res.json());
        return allServices.data.map((service) => ({
            service: service.link,
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
    const { service } = params;
    const data = await fetchData(`${nextUrl}/api/services/${service}`);

    await new Promise((resolve) => setTimeout(resolve, 5000));
    return (
        <div>
            <div className="relative w-full py-16 sm:px-10 px-3 h-auto bg-cover bg-center" style={{ backgroundImage: `url(${data.imageCoverLink})` }}>
                <div className="relative p-6 shadow-darker-blue bg-light-blue-active bg-opacity-90 max-w-4xl mx-auto rounded-lg text-center">
                    <h1 className="text-charcoal text-2xl sm:text-4xl font-bold mb-4">
                        {data.title}
                    </h1>

                    <p className="text-black">
                        At RPL FAST TRACK, we turn your real-world experience into formal qualifications. Our streamlined RPL assessment process covers {data.title} and more, making it easy to convert your skills into recognized credentials. With dedicated support from assessment to certification, we help you unlock new career and educational opportunities with confidence.
                    </p>
                </div>
            </div>
            <div className="bg-light-blue-hover sm:px-10 px-3  py-10 ">
                <div className="max-w-4xl mx-auto">
                    <div className="grid gap-3 md:gap-5 grid-cols-2 sm:grid-cols-2 md:grid-cols-3">
                        {data.certificates.map((certificate) => (
                            <CertificateCard key={certificate._id} service={service} certificate={certificate} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
