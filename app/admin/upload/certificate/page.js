import CertificateUploadForm from "@/app/admin/components/form/CertificateUploadForm";
import fetchDataForAdmin from "@/app/admin/lib/fetchDataForAdmin";
export default async function Page() {
    const nextUrl = process.env.NEXT_PUBLIC_API_URL
    if (!nextUrl) {
        return null;
    }
    const availableServices = await fetchDataForAdmin(`${nextUrl}/api/admin/services`);
    return (availableServices &&
        <div>
            <CertificateUploadForm mode="upload" availableServices={availableServices} />
        </div>
    )
}