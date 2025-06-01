"use client"

import { useActionState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { USER_INFO_FOMR_INPUTS } from "@/app/constants"
import { useSelector } from "react-redux"
import { selectFormDetails, setUserInfo } from "@/lib/features/formDetailsSlice"
import { useAppDispatch } from "@/lib/hooks"
import Input from "@/app/components/ui/Input"
import Button from "@/app/components/ui/Button"
import { IUserInfoActionResponse, userInfoAction } from "../actions"

const initialState: IUserInfoActionResponse = {
    success: false,
    errors: {},
    data: {
        name: "",
        email: "",
        phone: ""
    }
}

const Form = () => {
    const [state, formAction, pending] = useActionState(userInfoAction, initialState)
    const { userInfo } = useSelector(selectFormDetails)
    const router = useRouter()
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (state.success) {
            dispatch(setUserInfo(state.data))
            router.push("/select-plan")
        }
    }, [state, router, dispatch])

    return (
        <form action={formAction} className="flex flex-col gap-5 mt-3 flex-1">
            {USER_INFO_FOMR_INPUTS.map((input) => {
                const defaultValue = state.data[input.name as keyof typeof userInfo] || userInfo[input.name as keyof typeof userInfo]
                return (
                    <div key={input.name} className="flex flex-col">
                        <label htmlFor={input.name} className="font-medium text-marine-blue mb-1">
                            {input.label}
                        </label>
                        <Input
                            type={input.type}
                            id={input.name}
                            name={input.name}
                            disabled={pending}
                            defaultValue={defaultValue}
                            isError={Boolean(state.errors[input.name])}
                        />
                        {state.errors[input.name] && (
                            <span className="text-sm text-red-500">{state.errors[input.name]}</span>
                        )}
                    </div>
                )
            })}
            <div className="control-buttons">
                <Button type="submit" isLoading={pending} className="w-fit bg-marine-blue ml-auto">
                    {pending ? "Submitting..." : "Next Step"}
                </Button>
            </div>
        </form>
    )
}

export default Form