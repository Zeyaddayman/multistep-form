import ContentSection from "@/app/components/ContentSection"
import { ADD_ONS } from "@/app/constants"
import AddOnBox from "./components/AddOnBox"
import Link from "next/link"
import { baseButtonStyle } from "@/app/components/ui/Button"

const addOnsPage = () => {
    return (
        <ContentSection
            title="Pick add-ons"
            description="Add-ons help enhance your gaming experience"
        >
            <div className="flex flex-col gap-4 mb-5">
                {ADD_ONS.map((addOn) => (
                    <AddOnBox key={addOn.name} addOn={addOn} />
                ))}
            </div>
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

export default addOnsPage