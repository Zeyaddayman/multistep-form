import { FormErrors } from "../interfaces";
import { yourInfoSchema } from "../validations/your-info";

interface IYourInfoState {
    success: boolean;
    errors: FormErrors;
}

export const yourInfoAction = async (
    prevState: IYourInfoState,
    formData: FormData
): Promise<IYourInfoState> => {
    
    const unValidatedData = Object.fromEntries(formData.entries())
    const validatedData = yourInfoSchema.safeParse(unValidatedData)

    if (!validatedData.success) {
        const issues = validatedData.error.issues.reduce((acc: FormErrors, issue) => {
            acc[issue.path[0]] = issue.message;
            return acc
        }, {})

        return {
            success: false,
            errors: issues
        }
    }

    return {
        success: true,
        errors: {}
    }
}