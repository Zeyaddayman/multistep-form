import { FormErrors } from "@/interfaces";
import { ZodIssue } from "zod";

export function formatErrors(issues: ZodIssue[]) {
    const errors = issues.reduce((acc: FormErrors, issue) => {
            const error = String(issue.path)

            if (!acc[error]) acc[error] = issue.message

            return acc
    }, {})

    return errors
}