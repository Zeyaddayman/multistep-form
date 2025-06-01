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
        redirect("/your-info");
    }

    return {
        success: true
    }
}