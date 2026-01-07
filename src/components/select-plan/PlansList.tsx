"use client"

import { PLANS } from "@/constants"
import PlanBox from "./PlanBox"
import { useFormContext } from "@/contexts/FormContext"
import { PlanName } from "@/interfaces"

const PlansList = () => {

    const { form: { plan: selectedPlan, planType }, setPlan } = useFormContext()

    const setPlanName = (planName: PlanName) => {
        setPlan(planName)
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {PLANS.map((plan) => (
                <PlanBox
                    key={plan.name}
                    plan={plan}
                    isChecked={plan.name === selectedPlan}
                    planType={planType}
                    setPlanName={setPlanName}
                />
            ))}
        </div>
    )
}

export default PlansList