import ContentSection from "@/app/components/ContentSection"
import Form from "./Form"

const yourInfoPage = () => {
    return (
        <ContentSection
            title="Personal info"
            description="Please provide your name, email address, and phone number."
        >
            <Form />
        </ContentSection>
    )
}

export default yourInfoPage