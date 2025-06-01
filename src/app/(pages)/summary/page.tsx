"use client"

import ContentSection from "@/app/components/ContentSection"
import Button from "@/app/components/ui/Button"
import { useActionState } from "react"
import { confirmAction, IConfirmActionResponse } from "./actions"

const initialState: IConfirmActionResponse = {
    success: false
}

const SummaryPage = () => {

    const [state, confirmActionHandler, pending] = useActionState(confirmAction, initialState)

    const handleSubmit = () => {
        confirmActionHandler()
    }

    return (
        <ContentSection
            title="Finishing up"
            description="Double-check everything looks OK before confirming."
        >
        <div className="control-buttons">
            <Button
                type="submit"
                isLoading={pending}
                className="w-fit bg-purplish-blue ml-auto"
                onClick={handleSubmit}
            >
                {pending ? "Submitting..." : "Confirm"}
            </Button>
            </div>
        </ContentSection>
    )
}

export default SummaryPage