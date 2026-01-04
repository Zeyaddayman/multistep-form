"use server"

import { FormDetails } from "@/interfaces";
import { formatErrors } from "@/utils";
import { userInfoSchema } from "@/validations";
import { redirect } from "next/navigation";

export interface ConfirmActionState {
    success: boolean
}

export const confirmAction = async (
    prevState: ConfirmActionState,
    formDetails: FormDetails

): Promise<ConfirmActionState> => {

    const { userInfo } = formDetails

    const result = userInfoSchema.safeParse(userInfo)

    if (!result.success) {
        const searchParams = new URLSearchParams()

        const errors = formatErrors(result.error.issues)

        for (const key in errors) {
            searchParams.set(key, errors[key])
        }

        redirect(`/your-info?${searchParams}`)
    }

    return { success: true }
}