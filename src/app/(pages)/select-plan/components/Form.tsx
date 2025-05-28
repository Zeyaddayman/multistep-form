import { baseButtonStyle } from "@/app/components/ui/Button"
import { PLAN_TYPES } from "@/app/constants"
import Link from "next/link"
import PlanTypeToggle from "./PlanTypeToggle"
import PlanBox from "./PlanBox"

const Form = () => {
    return (
        <>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {PLAN_TYPES.map((plan) => (
                <PlanBox key={plan.name} plan={plan} />
            ))}
        </div>
        <PlanTypeToggle />
        <div className="control-buttons flex justify-between">
            <Link
                href="/your-info"
                className={`text-marine-blue opacity-70 hover:opacity-100 transition`}
            >
                go Back
            </Link>
            <Link
                href="/add-ons"
                className={`${baseButtonStyle} bg-marine-blue`}
            >
                Next Step
            </Link>
        </div>
        </>
    )
}

export default Form