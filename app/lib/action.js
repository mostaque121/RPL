'use server'
import { revalidatePath } from "next/cache"
export async function revalidateService() {
    console.log('revalidating')
    revalidatePath('/services')
}
