import ContentSection from "@/app/components/ContentSection"
import Form from "./components/Form"

const YourInfoPage = () => {
    return (
        <ContentSection
            title="Personal info"
            description="Please provide your name, email address, and phone number."
        >
            <Form />
        </ContentSection>
    )
}

export default YourInfoPage