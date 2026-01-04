import ContentSection from "@/components/ui/ContentSection"
import Link from "next/link"
import { baseButtonStyle } from "@/components/ui/Button"
import AddOnsList from "@/components/add-ons/AddOnsList"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Pick Add-ons",
    description: "Enhance your gaming experience with custom add-ons."
}

const AddOnsPage = () => {
    return (
        <ContentSection
            title="Pick add-ons"
            description="Add-ons help enhance your gaming experience"
        >
            <AddOnsList />
            <div className="control-buttons">
                <Link
                    href="/select-plan"
                    className={`text-marine-blue opacity-70 hover:opacity-100 transition`}
                >
                    go Back
                </Link>
                <Link
                    href="/summary"
                    className={`${baseButtonStyle} bg-marine-blue`}
                >
                    Next Step
                </Link>
            </div>
        </ContentSection>
    )
}

export default AddOnsPage