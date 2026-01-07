import { Form } from "@/interfaces"
import { formInitialState } from "."
import { FormAction } from "./types"

export const LOCAL_STORAGE_FORM_KEY = "form"

const saveToLocalStorage = (state: Form) => {
    localStorage.setItem(LOCAL_STORAGE_FORM_KEY, JSON.stringify(state))
}

let timeout: NodeJS.Timeout

const backgroundSaveToLocalStorage = (state: Form) => {

    clearTimeout(timeout)

    timeout = setTimeout(() => {
        localStorage.setItem(LOCAL_STORAGE_FORM_KEY, JSON.stringify(state))
    }, 500)
}

const formReducer = (state: Form, action: FormAction) => {

    let newState: Form

    switch (action.type) {
        case "SET_USER_INFO":
            newState = { ...state, userInfo: action.payload }

            // to prevent input delay because of the multiple disk writes
            backgroundSaveToLocalStorage(newState)
            return newState

        case "SET_PLAN_TYPE":
            newState = { ...state, planType: action.payload }
            saveToLocalStorage(newState)
            return newState

        case "SET_PLAN":
            newState = { ...state, plan: action.payload }
            saveToLocalStorage(newState)
            return newState

        case "SET_ADD_ONS":
            newState = { ...state, addOns: action.payload }
            saveToLocalStorage(newState)
            return newState

        case "SET_FORM":
            newState = { ...action.payload }
            saveToLocalStorage(newState)
            return newState

        case "CLEAR_FORM":
            newState = { ...formInitialState }
            localStorage.removeItem(LOCAL_STORAGE_FORM_KEY)
            return newState

        default:
            return state
    }
}

export default formReducer