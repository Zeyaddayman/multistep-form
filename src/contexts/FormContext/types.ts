import { Form } from "@/interfaces"

export type FormContextValue = {
    form: Form
    setUserInfo: (userInfo: Form["userInfo"]) => void
    setPlanType: (planType: Form["planType"]) =>  void
    setPlan: (plan: Form["plan"]) => void
    setAddOns: (addOns: Form["addOns"]) => void
    clearForm: () => void
}

export type FormAction =
    { type: "SET_USER_INFO", payload: Form["userInfo"] } |
    { type: "SET_PLAN_TYPE", payload: Form["planType"] } |
    { type: "SET_PLAN", payload: Form["plan"] } |
    { type: "SET_ADD_ONS", payload: Form["addOns"] } |
    { type: "SET_FORM", payload: Form } |
    { type: "CLEAR_FORM" }