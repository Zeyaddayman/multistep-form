"use client"

import { DEFAULT_PLAN, DEFAULT_PLAN_TYPE } from "@/constants";
import { Form } from "@/interfaces";
import { createContext, ReactNode, useContext, useEffect, useReducer } from "react";
import formReducer, { LOCAL_STORAGE_FORM_KEY } from "./reducer";
import { FormContextValue } from "./types";
import { initalFormStateSchema } from "@/validations";

export const formInitialState: Form = {
    userInfo: {
        name: '',
        email: '',
        phone: ''
    },
    planType: DEFAULT_PLAN_TYPE,
    plan: DEFAULT_PLAN.name,
    addOns: []
}

export const FormContext = createContext<FormContextValue | null>(null)

export const FormContextProvider = ({ children }: { children: ReactNode }) => {

    const [state, dispatch] = useReducer(formReducer, formInitialState)

    useEffect(() => {
        const savedFormAsString = localStorage.getItem(LOCAL_STORAGE_FORM_KEY)

        if (savedFormAsString) {
            const result = initalFormStateSchema.safeParse(JSON.parse(savedFormAsString))

            if (result.success) {
                dispatch({ type: "SET_FORM", payload: result.data as Form })
            }
        }
    }, [])

    const setUserInfo = (userInfo: Form["userInfo"]) => {
        dispatch({ type: "SET_USER_INFO", payload: userInfo })
    }

    const setPlanType = (planType: Form["planType"]) => {
        dispatch({ type: "SET_PLAN_TYPE", payload: planType })
    }

    const setPlan = (plan: Form["plan"]) => {
        dispatch({ type: "SET_PLAN", payload: plan })
    }

    const setAddOns = (addOns: Form["addOns"]) => {
        dispatch({ type: "SET_ADD_ONS", payload: addOns })
    }

    const clearForm = () => {
        dispatch({ type: "CLEAR_FORM" })
    }

    const value = {
        form: state,
        setUserInfo,
        setPlanType,
        setPlan,
        setAddOns,
        clearForm
    }

    return <FormContext.Provider value={value}>
        {children}
    </FormContext.Provider>
}

export const useFormContext = () => {
    const context = useContext(FormContext)

    if (context === null) {
        throw new Error("useFormContext must be used within a FormContextProvider")
    }

    return context
}