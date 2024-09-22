import Image from "next/image";
import Link from "next/link";

export default function CertificateCard({ service, certificate }) {
    return (
        <div className="bg-white shadow-darker-blue duration-200 rounded-lg overflow-hidden flex flex-col">
            <Link href={`/services/${service}/${certificate.link}`}>
                <div className=" p-2 sm:p-4">
                    <div className="relative rounded-md overflow-hidden hover:scale-[1.02] transition-all duration-200 ease-in-out w-full pb-[100%]">
                        <Image
                            src={certificate.imageSquareLink}
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
            <div className="pb-4 sm:px-4 px-3 flex-1">
                <Link href={`/services/${service}/${certificate.link}`}> <h3 className="md:text-lg sm:text-base text-sm font-semibold">{certificate.title}</h3></Link>
            </div>
        </div>
    );
}

