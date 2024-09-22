import CertificateUploadForm from "@/app/admin/components/form/CertificateUploadForm";
import fetchDataForAdmin from "@/app/admin/lib/fetchDataForAdmin";
export default async function Page({ params }) {
    const { link } = params;
    const nextUrl = process.env.NEXT_PUBLIC_API_URL
    if (!nextUrl) {
        return null;
    }
    const initialData = await fetchDataForAdmin(`${nextUrl}/api/certificates/${link}`);
    const availableServices = await fetchDataForAdmin(`${nextUrl}/api/admin/services`);
    return (initialData &&
        <div>
            <CertificateUploadForm initialData={initialData} mode="edit" availableServices={availableServices} />
        </div>
    )
}