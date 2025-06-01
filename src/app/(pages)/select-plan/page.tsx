import ContentSection from "@/app/components/ContentSection"
import { PLAN_TYPES } from "@/app/constants"
import PlanBox from "./components/PlanBox"
import PlanTypeToggle from "./components/PlanTypeToggle"
import Link from "next/link"
import { baseButtonStyle } from "@/app/components/ui/Button"

const selectPlanPage = () => {
    return (
        <ContentSection
            title="Select your plan"
            description="You have the option of monthly or yerly billing."
        >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {PLAN_TYPES.map((plan) => (
                    <PlanBox key={plan.name} plan={plan} />
                ))}
            </div>
            <PlanTypeToggle />
            <div className="control-buttons">
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
        </ContentSection>
    )
}

export default selectPlanPage