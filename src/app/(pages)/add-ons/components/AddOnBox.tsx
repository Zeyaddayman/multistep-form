"use client"

import Input from "@/app/components/ui/Input"
import { IAddOn } from "@/app/interfaces"
import { selectFormDetails, setAddOns } from "@/lib/features/formDetailsSlice"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { Check } from "lucide-react"

const AddOnBox = ({ addOn }: { addOn: IAddOn }) => {

    const { addOns, planType }  = useAppSelector(selectFormDetails)
    const dispatch = useAppDispatch()

    const isChecked = addOns.some(({ name }) => name === addOn.name)

    const handleChange = () => {
        let updatedAddOns

        if (isChecked) {
            updatedAddOns = addOns.filter(({ name }) => name !== addOn.name);
        } else {
            updatedAddOns = [...addOns, addOn];
        }

        dispatch(setAddOns(updatedAddOns))
    }

    return (
        <div>
            <Input
                type="checkbox"
                id={addOn.name}
                name={addOn.name}
                className="appearance-none absolute"
                checked={isChecked}
                onChange={handleChange}
            />
            <label
                htmlFor={addOn.name}
                className={`
                    ${isChecked ? 'border-purplish-blue bg-neutral-100' : 'border-gray-300'}
                    flex justify-between items-center p-3 rounded-lg border-3 border-gray-300 hover:border-purplish-blue transition cursor-pointer
                `}
            >
                <div className="flex gap-3 items-center">
                    <span className="w-6 h-6 rounded border-2 border-gray-500">
                        <span className={`${isChecked ? "scale-100" : "scale-0"} flex w-full h-full bg-purplish-blue transition`}>
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