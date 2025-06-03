"use server"

import { IFormDetails } from "@/app/interfaces";
import { userInfoSchema } from "@/app/validations";
import { redirect } from "next/navigation";

export interface IConfirmActionResponse {
    success: boolean;
}

export const confirmAction = async (
    prevState: IConfirmActionResponse,
    formDetails: IFormDetails
): Promise<IConfirmActionResponse> => {

    const { userInfo } = formDetails
    
    const validatedData = userInfoSchema.safeParse(userInfo)

    if (!validatedData.success) {
        const searchParams = new URLSearchParams()

        const issues = validatedData.error.issues

        for (let i = 0; i < issues.length; i++) {
            searchParams.set(String(issues[i].path[0]), issues[i].message)
        }
        redirect(`/your-info?${searchParams}`);
    }

    return {
        success: true
    }
}