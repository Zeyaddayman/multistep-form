"use client"

import { startTransition, useActionState, useEffect } from "react"
import ContentSection from "../ui/ContentSection"
import ThankYou from "./ThankYou"
import { confirmAction, ConfirmActionState } from "@/actions/summary"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { resetFormDetails, selectFormDetails, setSavedFormDetails } from "@/lib/features/formDetailsSlice"
import Button from "../ui/Button"
import Link from "next/link"

const initialState: ConfirmActionState = {
    success: false
}

const FinishingUp = () => {

    const [state, action, pending] = useActionState(confirmAction, initialState)
    const formDetails = useAppSelector(selectFormDetails)
    const dispatch = useAppDispatch()

    // Get saved form details on mount
    useEffect(() => {
        dispatch(setSavedFormDetails())
    }, [dispatch])

    useEffect(() => {
        if (state.success) {
            dispatch(resetFormDetails())
        }
    }, [dispatch, state.success])

    if (state.success) return <ThankYou />

    const handleSubmit = () => {
        startTransition(() => action(formDetails))
    }

    const calculateTotal = () => {
        const planPrice = formDetails.selectedPlan.price[formDetails.planType];
        const addOnsTotal = formDetails.addOns.reduce((total, addOn) => total + addOn.price[formDetails.planType], 0);
        return planPrice + addOnsTotal;
    }

    return (
        <ContentSection
            title="Finishing up"
            description="Double-check everything looks OK before confirming."
        >
            <div className="rounded-lg bg-[#bfe2fd1a] px-6 py-4 mb-6">
                <div className="flex items-center justify-between pb-5 border-b-1 border-light-blue">
                    <div>
                        <h4 className="text-xl font-semibold text-marine-blue">
                            {`${formDetails.selectedPlan.name} (${formDetails.planType.charAt(0).toUpperCase() + formDetails.planType.slice(1)})`}
                        </h4>
                        <Link
                            href={`/select-plan`}
                            className="underline text-purplish-blue"
                        >
                            Change
                        </Link>
                    </div>
                    <span className="text-marine-blue text-xl font-semibold">
                        ${formDetails.selectedPlan.price[formDetails.planType]}/{formDetails.planType === "monthly" ? "mo" : "yr"}
                    </span>
                </div>
                <div className="flex flex-col gap-4 mt-4">
                    {formDetails.addOns.map((addOn) => (
                        <div key={addOn.name} className="flex justify-between">
                            <p className="font-semibold text-gray-500">{addOn.name}</p>
                            <span>
                                +${addOn.price[formDetails.planType]}/{formDetails.planType === "monthly" ? "mo" : "yr"}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="px-6 mb-5">
                <div className="flex justify-between items-center text-xl font-semibold text-gray-500">
                    <span>Total (per {formDetails.planType === "monthly" ? "month" : "year"})</span>
                    <span className="text-purplish-blue">
                        ${calculateTotal()}/{formDetails.planType === "monthly" ? "mo" : "yr"}
                    </span>
                </div>
            </div>
            <div className="control-buttons">
                <Link
                    href="/add-ons"
                    className={`text-marine-blue opacity-70 hover:opacity-100 transition`}
                >
                    go Back
                </Link>
                <Button
                    type="submit"
                    className="w-fit bg-purplish-blue ml-auto"
                    onClick={handleSubmit}
                    disabled={pending}
                >
                    {pending ? "Submitting..." : "Confirm"}
                </Button>
            </div>
        </ContentSection>
    )
}

export default FinishingUp