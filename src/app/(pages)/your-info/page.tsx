import ContentSection from "@/app/components/ContentSection"
import Form from "./components/Form"

interface IProps {
    searchParams: Promise<{ [key: string]: string }>
}

const YourInfoPage = async ({ searchParams }: IProps) => {

    const initialErrors = await searchParams

    return (
        <ContentSection
            title="Personal info"
            description="Please provide your name, email address, and phone number."
        >
            <Form initialErrors={initialErrors} />
        </ContentSection>
    )
}

export default YourInfoPage