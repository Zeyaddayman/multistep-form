"use client"

import Input from "@/app/components/ui/Input"
import { PLAN_TYPES } from "@/app/constants"
import { selectFormDetails, setSelectedPlan } from "@/lib/features/formDetailsSlice"
import { useAppDispatch } from "@/lib/hooks"
import Image from "next/image"
import { useSelector } from "react-redux"

const Form = () => {
    const { selectedPlan } = useSelector(selectFormDetails)
    const dispatch = useAppDispatch()

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {PLAN_TYPES.map((plan) => (
                <div key={plan.name}>
                    <Input
                        className="appearance-none absolute"
                        type="radio"
                        name={plan.name}
                        id={plan.name}
                        checked={selectedPlan?.name === plan.name}
                        value={plan.name}
                        onChange={() => dispatch(setSelectedPlan(plan))}
                    />
                    <label
                        htmlFor={plan.name}
                        className={`
                            ${selectedPlan?.name === plan.name ? 'border-purplish-blue bg-neutral-100' : 'border-gray-300'}
                            flex flex-row lg:flex-col p-3 rounded-lg border-3 border-gray-300 hover:border-purplish-blue transition cursor-pointer
                        `}
                    >
                        <Image
                            src={plan.icon}
                            alt={`${plan.name} icon`}
                            width={40}
                            height={40}
                            className="lg:mb-10"
                        />
                        <div>
                            <h3 className="text-lg font-semibold text-marine-blue mb-2">
                                {plan.name}
                            </h3>
                            <p className="text-sm text-gray-500">
                                ${plan.price.monthly}/mo
                            </p>
                        </div>
                    </label>
                </div>
            ))}
        </div>
    )
}

export default Form