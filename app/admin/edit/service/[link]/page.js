import ServiceUploader from "@/app/admin/components/form/ServiceUploadForm";
import fetchDataForAdmin from "@/app/admin/lib/fetchDataForAdmin";
export default async function Page({ params }) {
    const { service } = params;
    const nextUrl = process.env.NEXT_PUBLIC_API_URL
    if (!nextUrl) {
        return null;
    }
    const initialData = await fetchDataForAdmin(`${nextUrl}/api/services/${service}`);
    const availableServices = await fetchDataForAdmin(`${nextUrl}/api/services`);
    return (
        <div>
            <ServiceUploader initialData={initialData} mode="edit" availableItems={availableServices} />
        </div>
    )
}