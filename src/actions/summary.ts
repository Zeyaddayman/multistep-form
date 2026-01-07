"use server"

import { Form } from "@/interfaces";
import { formatErrors } from "@/utils";
import { finalSchema } from "@/validations";
import { redirect } from "next/navigation";
export interface ConfirmActionState {
    success: boolean
}

export const confirmAction = async (
    _prevState: ConfirmActionState,
    form: Form

): Promise<ConfirmActionState> => {

    const result = finalSchema.safeParse(form)

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