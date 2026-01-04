"use client"

import { PLANS } from "@/constants"
import PlanBox from "./PlanBox"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { selectFormDetails, setSavedFormDetails, setSelectedPlan } from "@/lib/features/formDetailsSlice"
import { Plan } from "@/interfaces"
import { useEffect } from "react"

const PlansList = () => {

    const { selectedPlan, planType } = useAppSelector(selectFormDetails)
    const dispatch = useAppDispatch()

    // Get saved form details on mount
    useEffect(() => {
        dispatch(setSavedFormDetails())
    }, [dispatch])

    const setPlan = (plan: Plan) => {
        dispatch(setSelectedPlan(plan))
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {PLANS.map((plan) => (
                <PlanBox
                    key={plan.name}
                    plan={plan}
                    isChecked={selectedPlan?.name === plan.name}
                    planType={planType}
                    setPlan={setPlan}
                />
            ))}
        </div>
    )
}

export default PlansList