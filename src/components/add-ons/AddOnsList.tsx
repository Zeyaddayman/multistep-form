"use client"

import { ADD_ONS } from "@/constants"
import AddOnBox from "./AddOnBox"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { selectFormDetails, setAddOns, setSavedFormDetails } from "@/lib/features/formDetailsSlice"
import { AddOn } from "@/interfaces"
import { useEffect } from "react"

const AddOnsList = () => {

    const { addOns, planType } = useAppSelector(selectFormDetails)
    const dispatch = useAppDispatch()

    // Get saved form details on mount
    useEffect(() => {
        dispatch(setSavedFormDetails())
    }, [dispatch])

    const toggleAddOn = (addOn: AddOn) => {

        const isAlreadyAdded = addOns.some(({ name }) => name === addOn.name)

        let updatedAddOns: AddOn[]

        if (isAlreadyAdded) {
            updatedAddOns = addOns.filter(({ name }) => name !== addOn.name)
        }
        else {
            updatedAddOns = [...addOns, addOn]
        }

        dispatch(setAddOns(updatedAddOns))
    }

    return (
        <div className="flex flex-col gap-4 mb-5">
            {ADD_ONS.map(addOn => (
                <AddOnBox
                    key={addOn.name}
                    addOn={addOn}
                    isChecked={addOns.some(({ name }) => name === addOn.name)}
                    planType={planType}
                    toggleAddOn={toggleAddOn}
                />
            ))}
        </div>
    )
}

export default AddOnsList