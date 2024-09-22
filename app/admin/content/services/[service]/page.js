import CertificateCard from "@/app/admin/components/card/CertificateCard";
import fetchData from "@/app/lib/fetchData";
export default async function Page({ params }) {
    const nextUrl = process.env.NEXT_PUBLIC_API_URL
    if (!nextUrl) {
        return null;
    }
    const { service } = params;
    const data = await fetchData(`${nextUrl}/api/services/${service}`);
    return (
        <div>
            <div className="relative w-full py-16 sm:px-10 px-3 h-auto bg-cover bg-center" style={{ backgroundImage: `url(${data.imageCoverLink})` }}>
                <div className="relative p-6 shadow-darker-blue bg-light-blue-active bg-opacity-90 max-w-4xl mx-auto rounded-lg text-center">
                    <h1 className="text-charcoal text-2xl sm:text-4xl font-bold mb-4">
                        {data.title}
                    </h1>
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