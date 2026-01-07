import ContentSection from "@/components/ui/ContentSection"
import UserInfoForm from "@/components/your-info/Form"
import { Metadata } from "next"

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
        </ContentSection>
    )
}

export default YourInfoPage