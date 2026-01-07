import { FormErrors } from "@/interfaces";
import { ZodIssue } from "zod";

export function formatErrors(issues: ZodIssue[]) {
    const errors = issues.reduce((acc: FormErrors, issue) => {

        const errorName = issue.path[issue.path.length - 1]

        if (!acc[errorName]) acc[errorName] = issue.message

        return acc
    }, {})

    return errors
}