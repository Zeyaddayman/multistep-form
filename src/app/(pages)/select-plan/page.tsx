import ContentSection from "@/app/components/ContentSection"
import Form from "./Form"

const selectPlanPage = () => {
    return (
        <ContentSection
            title="Select your plan"
            description="You have the option of monthly or yerly billing."
        >
            <Form />
        </ContentSection>
    )
}

export default selectPlanPage