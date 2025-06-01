"use client"

import Input from "@/app/components/ui/Input"
import { ISelectedPlan } from "@/app/interfaces";
import { selectFormDetails, setSelectedPlan } from "@/lib/features/formDetailsSlice";
import { useAppDispatch } from "@/lib/hooks";
import Image from "next/image";
import { useSelector } from "react-redux";

const PlanBox = ({ plan }: { plan: ISelectedPlan }) => {

    const { selectedPlan, planType } = useSelector(selectFormDetails)
    const dispatch = useAppDispatch()

    return (
        <div>
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