import ContentSection from "@/components/ui/ContentSection"
import Link from "next/link"
import { baseButtonStyle } from "@/components/ui/Button"
import PlanTypeToggle from "@/components/select-plan/PlanTypeToggle"
import PlansList from "@/components/select-plan/PlansList"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Select Plan",
    description: "Choose your plan and choose between monthly or yearly billing options."
}

const SelectPlanPage = () => {
    return (
        <ContentSection
            title="Select your plan"
            description="You have the option of monthly or yerly billing."
        >
            <PlansList />
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

export default SelectPlanPage