import fetchData from "@/app/lib/fetchData";
import ServiceCard from "../../components/card/ServiceCard";
export default async function Page() {
    const nextUrl = process.env.NEXT_PUBLIC_API_URL
    if (!nextUrl) {
        return null;
    }
    const services = await fetchData(`${nextUrl}/api/services`);
    return (
        <div>
            <div className="relative w-full py-16 sm:px-10 px-3 h-auto bg-cover bg-center" style={{ backgroundImage: 'url("/DeWatermark.ai_1726683796769.png")' }}>
                <div className="relative p-6 shadow-darker-blue bg-light-blue-active bg-opacity-90 max-w-4xl mx-auto rounded-lg text-center">
                    <h1 className="text-charcoal text-2xl sm:text-4xl font-bold mb-4">
                        Services
                    </h1>
                </div>
            </div>
            <div className="bg-light-blue-hover sm:px-10 px-3  py-10 ">
                <div className="max-w-4xl mx-auto">
                    <div className="grid gap-3 md:gap-5 grid-cols-2 sm:grid-cols-2 md:grid-cols-3">
                        {services.map((service) => (
                            <ServiceCard key={service._id} service={service} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
