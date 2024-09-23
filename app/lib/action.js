'use server'
import { revalidatePath, revalidateTag } from "next/cache"
export async function revalidateService() {
    console.log('revalidating')
    revalidatePath('/services')
};

export async function revalidateServiceTag() {
    console.log('revalidating')
    revalidateTag('service')
}
