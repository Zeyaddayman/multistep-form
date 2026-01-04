"use client"

import Input from "@/components/ui/Input"
import { AddOn, PlanType } from "@/interfaces"
import { Check } from "lucide-react"

interface Props {
    addOn: AddOn
    isChecked: boolean
    planType: PlanType
    toggleAddOn: (addOn: AddOn) => void
}

const AddOnBox = ({ addOn, isChecked, planType, toggleAddOn }: Props) => {
    return (
        <div>
            <Input
                type="checkbox"
                id={addOn.name}
                name={addOn.name}
                className="sr-only peer"
                checked={isChecked}
                value={addOn.name}
                onChange={() => toggleAddOn(addOn)}
            />
            <label
                htmlFor={addOn.name}
                className={`
                    ${isChecked ? 'border-purplish-blue bg-neutral-100' : 'border-gray-300'}
                    flex justify-between items-center p-3 rounded-lg border-3 border-gray-300 hover:border-purplish-blue transition cursor-pointer peer-focus-visible:border-gray-500
                `}
            >
                <div className="flex gap-3 items-center">
                    <span className="w-6 h-6 rounded border-2 border-gray-500">
                        <span className={`${isChecked ? "scale-100" : "scale-0"} flex w-full h-full bg-purplish-blue transition-transform`}>
                            <Check color="white" />
                        </span>
                    </span>
                    <div>
                        <h3 className="text-lg font-semibold text-marine-blue mb-2">
                            {addOn.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                            {addOn.description}
                        </p>
                    </div>
                </div>
                <span className="text-purplish-blue font-semibold">
                    {planType === 'monthly' ? `+$${addOn.price.monthly}/mo` : `+$${addOn.price.yearly}/yr`}
                </span>
            </label>
        </div>
    )
}

export default AddOnBox