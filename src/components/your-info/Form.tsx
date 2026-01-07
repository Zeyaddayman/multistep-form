"use client"

import { useEffect, useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { USER_INFO_FORM_FIELDS } from "@/constants"
import Input from "@/components/ui/Input"
import { FormErrors, UserInfoFieldsNames } from "@/interfaces"
import { userInfoSchema } from "@/validations"
import { useFormContext } from "@/contexts/FormContext"
import Button from "../ui/Button"
import { formatErrors } from "@/utils"

const initialErrors = USER_INFO_FORM_FIELDS.reduce((acc, field) => {
    acc[field.name] = ""
    return acc
}, {} as Record<UserInfoFieldsNames, "">)

const UserInfoForm = () => {

    const { form: { userInfo }, setUserInfo } = useFormContext()

    const [errors, setErrors] = useState<FormErrors>(initialErrors)
    const [shouldShowError, setShouldShowError] = useState<string[]>([])

    const router = useRouter()
    const pathname = usePathname()

    useEffect(() => {

        // Get the errors messages if got redirected from the summary step
        const searchParams = new URLSearchParams(window.location.search)

        const searchParamsErrors: FormErrors = {}
        const newShouldShowError: string[] = []

        searchParams.forEach((value, key) => {
            searchParamsErrors[`${key}`] = value
            newShouldShowError.push(key)
        })

        setErrors(searchParamsErrors)
        setShouldShowError(newShouldShowError)

        // Clear the browser history from the searchParams errors messages
        if (searchParams.size) router.replace(pathname)

    }, [pathname, router])


    const handleChange = (fieldName: UserInfoFieldsNames, value: string) => {

        const newUserInfo = {...userInfo, [fieldName]: value }

        setUserInfo(newUserInfo)

        const result = userInfoSchema.shape[fieldName].safeParse(value)

        if (!result.success) {
            setErrors(prev => ({
                ...prev,
                [fieldName]: result.error.issues[0].message
            }))
        }
        else {
            setErrors(prev => ({
                ...prev,
                [fieldName]: ""
            }))
        }
    }

    const handleBlur = (fieldName: string) => {
        if (!shouldShowError.includes(fieldName)) {
            setShouldShowError(prev => [...prev, fieldName])
        }
    }

    const handleNextStep = () => {

        const result = userInfoSchema.safeParse(userInfo)

        if (!result.success) {

            const errors = formatErrors(result.error.issues)

            setErrors(errors)

            const newShouldShowError: string[] = []

            Object.keys(errors).forEach(key => newShouldShowError.push(key))

            setShouldShowError(newShouldShowError)
        }
        else {
            router.push("/select-plan")
        }
    }

    return (
        <form className="flex flex-col gap-5 mt-3 flex-1">
            {USER_INFO_FORM_FIELDS.map((field) => {

                const value = userInfo[`${field.name}`]

                const errorMsg = errors[field.name]

                const showErrorMessage = shouldShowError.includes(field.name) && Boolean(errorMsg)

                return (
                    <div key={field.name} className="flex flex-col">
                        <label htmlFor={field.name} className="font-medium text-marine-blue mb-1">
                            {field.label}
                        </label>
                        <Input
                            type={field.type}
                            id={field.name}
                            name={field.name}
                            value={value}
                            autoFocus={field.autoFocus}
                            isError={showErrorMessage}
                            onChange={(e) => handleChange(field.name, e.target.value)}
                            onBlur={() => handleBlur(field.name)}
                        />
                        <span className="text-sm text-red-500 block h-2">
                            {showErrorMessage && errorMsg}
                        </span>
                    </div>
                )
            })}
            <div className="control-buttons">
                <Button
                    type="button"
                    className="w-fit bg-marine-blue ml-auto"
                    onClick={handleNextStep}
                >
                    Next Step
                </Button>
            </div>
        </form>
    )
}

export default UserInfoForm