"use client"

import { ADD_ONS } from "@/constants"
import AddOnBox from "./AddOnBox"
import { AddOnName } from "@/interfaces"
import { useFormContext } from "@/contexts/FormContext"

const AddOnsList = () => {

    const { form: { addOns, planType }, setAddOns } = useFormContext()

    const toggleAddOn = (addOnName: AddOnName) => {

        const isAlreadyAdded = addOns.includes(addOnName)

        let updatedAddOns: AddOnName[]

        if (isAlreadyAdded) {
            updatedAddOns = addOns.filter((name) => name !== addOnName)
        }
        else {
            updatedAddOns = [...addOns, addOnName]
        }

        setAddOns(updatedAddOns)
    }

    return (
        <div className="flex flex-col gap-4 mb-5">
            {ADD_ONS.map(addOn => (
                <AddOnBox
                    key={addOn.name}
                    addOn={addOn}
                    isChecked={addOns.includes(addOn.name)}
                    planType={planType}
                    toggleAddOn={toggleAddOn}
                />
            ))}
        </div>
    )
}

export default AddOnsList