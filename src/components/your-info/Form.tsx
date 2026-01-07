"use client"

import { useEffect, useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { USER_INFO_FORM_FIELDS } from "@/constants"
import Input from "@/components/ui/Input"
import { FormErrors, UserInfoFieldsNames } from "@/interfaces"
import { userInfoSchema } from "@/validations"
import { useFormContext } from "@/contexts/FormContext"

const initialErrors = USER_INFO_FORM_FIELDS.reduce<Record<UserInfoFieldsNames, "">>((acc, field) => {
    acc[field.name] = ""
    return acc
}, {} as Record<UserInfoFieldsNames, "">)

const UserInfoForm = () => {

    const { form: { userInfo }, setUserInfo } = useFormContext()

    const [errors, setErrors] = useState<FormErrors>(initialErrors)
    const [bluredInputs, setbluredInputs] = useState<string[]>([])

    const router = useRouter()
    const pathname = usePathname()

    useEffect(() => {

        // Get the errors messages if got redirected from the summary step
        const searchParams = new URLSearchParams(window.location.search)

        const searchParamsErrors: FormErrors = {}
        const newBluredInputs: string[] = []

        searchParams.forEach((value, key) => {
            searchParamsErrors[`${key}`] = value
            newBluredInputs.push(key)
        })

        setErrors(searchParamsErrors)
        setbluredInputs(newBluredInputs)

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
        if (!bluredInputs.includes(fieldName)) {
            setbluredInputs(prev => [...prev, fieldName])
        }
    }

    return (
        <form className="flex flex-col gap-5 mt-3 flex-1">
            {USER_INFO_FORM_FIELDS.map((field) => {

                const fieldName = field.name as keyof typeof userInfo

                const value = userInfo[`${fieldName}`]

                const errorMsg = errors[field.name]

                const showErrorMessage = bluredInputs.includes(fieldName) && Boolean(errorMsg)

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
                            onChange={(e) => handleChange(fieldName, e.target.value)}
                            onBlur={() => handleBlur(fieldName)}
                        />
                        <span className="text-sm text-red-500 block h-2">
                            {showErrorMessage && errorMsg}
                        </span>
                    </div>
                )
            })}
        </form>
    )
}

export default UserInfoForm