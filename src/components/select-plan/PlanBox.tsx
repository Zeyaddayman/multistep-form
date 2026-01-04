"use client"

import Input from "@/components/ui/Input"
import { Plan, PlanType } from "@/interfaces";
import Image from "next/image";

interface Props {
    plan: Plan
    isChecked: boolean
    planType: PlanType
    setPlan: (plan: Plan) => void
}

const PlanBox = ({ plan, isChecked, planType, setPlan }: Props) => {
    return (
        <div>
            <Input
                className="sr-only peer"
                type="radio"
                name={plan.name}
                id={plan.name}
                checked={isChecked}
                value={plan.name}
                onChange={() => setPlan(plan)}
            />
            <label
                htmlFor={plan.name}
                className={`
                    ${isChecked ? 'border-purplish-blue bg-neutral-100' : 'border-gray-300'}
                    flex flex-row lg:flex-col items-center lg:items-start p-3 rounded-lg border-3 border-gray-300 hover:border-purplish-blue transition cursor-pointer peer-focus-visible:border-gray-500
                `}
            >
                <Image
                    src={plan.icon}
                    alt={`${plan.name} icon`}
                    width={40}
                    height={40}
                    className="lg:mb-10 mr-5 lg:mr-0"
                />
                <div>
                    <h3 className="text-lg font-semibold text-marine-blue mb-2">
                        {plan.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                        {planType === 'monthly' ? `$${plan.price.monthly}/mo` : `$${plan.price.yearly}/yr`}
                    </p>
                    {planType === 'yearly' && (
                        <p className="text-sm text-marine-blue mt-1">
                            {plan.yearlyOffer}
                        </p>
                    )}
                </div>
            </label>
        </div>
    )
}

export default PlanBox