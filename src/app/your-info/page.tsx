import { baseButtonStyle } from "@/components/ui/Button"
import ContentSection from "@/components/ui/ContentSection"
import UserInfoForm from "@/components/your-info/Form"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Personal Info",
    description: "Please provide your name, email address, and phone number."
}

const YourInfoPage = async () => {
    return (
        <ContentSection
            title="Personal info"
            description="Please provide your name, email address, and phone number."
        >
            <UserInfoForm />
            <div className="control-buttons">
                <Link
                    href="/select-plan"
                    className={`${baseButtonStyle} bg-marine-blue ml-auto`}
                >
                    Next Step
                </Link>
            </div>
        </ContentSection>
    )
}

export default YourInfoPage