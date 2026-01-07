"use client"

import { startTransition, useActionState, useEffect } from "react"
import ContentSection from "../ui/ContentSection"
import ThankYou from "./ThankYou"
import { confirmAction, ConfirmActionState } from "@/actions/summary"
import Button from "../ui/Button"
import Link from "next/link"
import { useFormContext } from "@/contexts/FormContext"
import { ADD_ONS, PLANS } from "@/constants"

const initialState: ConfirmActionState = {
    success: false
}

const FinishingUp = () => {

    const [state, action, pending] = useActionState(confirmAction, initialState)

    const { form, clearForm } = useFormContext()

    useEffect(() => {

        if (state.success) clearForm()

    }, [state.success])


    if (state.success) return <ThankYou />

    const handleSubmit = () => {
        startTransition(() => action(form))
    }

    const planType = form.planType

    const selectedPlan = PLANS.find(plan => plan.name === form.plan)!

    const selectedAddOns = ADD_ONS.filter(addOn => form.addOns.includes(addOn.name))

    const calculateTotal = () => {
        const planPrice = selectedPlan.price[planType];
        const addOnsTotal = selectedAddOns.reduce((total, addOn) => total + addOn.price[planType], 0);
        return planPrice + addOnsTotal;
    }

    const formattedPlanType = planType.charAt(0).toUpperCase() + planType.slice(1)

    return (
        <ContentSection
            title="Finishing up"
            description="Double-check everything looks OK before confirming."
        >
            <div className="rounded-lg bg-[#bfe2fd1a] px-6 py-4 mb-6">
                <div className="flex items-center justify-between pb-5 border-b-1 border-light-blue">
                    <div>
                        <h4 className="text-xl font-semibold text-marine-blue">
                            {`${selectedPlan.name} (${formattedPlanType})`}
                        </h4>
                        <Link
                            href={`/select-plan`}
                            className="underline text-purplish-blue"
                        >
                            Change
                        </Link>
                    </div>
                    <span className="text-marine-blue text-xl font-semibold">
                        ${selectedPlan.price[planType]}/{planType === "monthly" ? "mo" : "yr"}
                    </span>
                </div>
                <div className="flex flex-col gap-4 mt-4">
                    {selectedAddOns.map((addOn) => (
                        <div key={addOn.name} className="flex justify-between">
                            <p className="font-semibold text-gray-500">{addOn.name}</p>
                            <span>
                                +${addOn.price[planType]}/{planType === "monthly" ? "mo" : "yr"}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="px-6 mb-5">
                <div className="flex justify-between items-center text-xl font-semibold text-gray-500">
                    <span>Total (per {planType === "monthly" ? "month" : "year"})</span>
                    <span className="text-purplish-blue">
                        ${calculateTotal()}/{planType === "monthly" ? "mo" : "yr"}
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
                    {pending ? "Confirming..." : "Confirm"}
                </Button>
            </div>
        </ContentSection>
    )
}

export default FinishingUp