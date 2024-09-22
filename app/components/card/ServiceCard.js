import Image from "next/image";
import Link from "next/link";

export default function ServiceCard({ service }) {
    return (
        <div className="bg-white shadow-darker-blue duration-200 rounded-lg overflow-hidden flex flex-col">
            <Link href={`/services/${service.link}`}>
                <div className="p-4">
                    <div className="relative rounded-md overflow-hidden hover:scale-[1.02] transition-all duration-200 ease-in-out w-full pb-[100%]">
                        <Image
                            src={service.imageSquareLink}
                            alt='Service Image'
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 
                            (max-width: 1200px) 50vw, 
                            33vw"
                        />
                    </div>
                </div>
            </Link>

            <div className="pb-4 px-4 flex-1">
                <Link href={`/services/${service.link}`}> <h3 className="text-lg font-semibold">{service.title}</h3></Link>
                <div>
                    {service.certificates.slice(0, 3).map((certificate) => (
                        <Link key={certificate._id} href={`/services/${service.link}/${certificate.link}`}>
                            <p className="text-gray-700 text-nowrap text-ellipsis overflow-hidden text-sm cursor-pointer hover:text-blue-600 active:text-blue-700 active:underline transition-all duration-200 ease-in-out">
                                {certificate.title}
                            </p>
                        </Link>
                    ))}
                </div>
                <Link href={`/services/${service.link}`}><p className="text-gray-700 text-sm cursor-pointer text-blue-600 active:text-blue-700 active:underline transition-all duration-200 ease-in-out">more..</p></Link>
            </div>
        </div>
    );
}

