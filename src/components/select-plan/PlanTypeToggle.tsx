"use client"

import Input from "@/components/ui/Input"
import { selectFormDetails, setPlanType } from "@/lib/features/formDetailsSlice"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"

const PlanTypeToggle = () => {

    const { planType } = useAppSelector(selectFormDetails)
    const dispatch = useAppDispatch()

    const togglePlanType = () => {
        dispatch(setPlanType(planType === 'monthly' ? 'yearly' : 'monthly'))
    }

    return (
        <div className="flex items-center justify-center mt-5 bg-[#bfe2fd1a] rounded p-4 gap-5 mb-5">
            <Input
                className="sr-only peer"
                type="checkbox"
                name="planType"
                id="planType"
                aria-label="Change plan type"
                onChange={togglePlanType}
            />
            <span
                className={`text-marine-blue font-semibold transition duration-500 ${planType === "monthly" ? "opacity-100" : "opacity-60"}`}
            >
                Monthly
            </span>
            <label
                htmlFor="planType"
                className="relative w-[70px] h-[26px] bg-marine-blue rounded-full cursor-pointer ring-2 ring-transparent peer-focus-visible:ring-gray-500"
            >
                <span
                    className={`absolute top-1/2 -translate-y-1/2 w-[20px] h-[20px] bg-white rounded-full transition duration-500 ${
                        planType === 'monthly' ? 'translate-x-[5px]' : 'translate-x-[45px]'
                    }`}
                ></span>
            </label>
            <span
                className={`text-marine-blue font-semibold transition duration-500 ${planType === "yearly" ? "opacity-100" : "opacity-60"}`}
            >
                Yearly
            </span>
        </div>
    )
}

export default PlanTypeToggle