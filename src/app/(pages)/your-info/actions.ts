"use server"

import { FormErrors, TUserInfo } from "@/app/interfaces";
import { userInfoSchema } from "@/app/validations";

export interface IUserInfoActionResponse {
    success: boolean;
    errors: FormErrors;
    data: TUserInfo;
}

export const userInfoAction = async (
    prevState: IUserInfoActionResponse,
    formData: FormData
): Promise<IUserInfoActionResponse> => {
    
    const unValidatedData: TUserInfo = {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string
    }
    const validatedData = userInfoSchema.safeParse(unValidatedData)

    if (!validatedData.success) {
        const issues = validatedData.error.issues.reduce((acc: FormErrors, issue) => {
            acc[issue.path[0]] = issue.message;
            return acc
        }, {})

        return {
            success: false,
            errors: issues,
            data: unValidatedData
        }
    }

    return {
        success: true,
        errors: {},
        data: validatedData.data
    }
}