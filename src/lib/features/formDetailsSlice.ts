import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store';
import { DEFAULT_PLAN, DEFAULT_PLAN_TYPE } from '@/constants';
import { FormDetails } from '@/interfaces';

const initialState: FormDetails = {
    userInfo: {
        name: '',
        email: '',
        phone: ''
    },
    planType: DEFAULT_PLAN_TYPE,
    selectedPlan: DEFAULT_PLAN,
    addOns: []
}

let timeout: NodeJS.Timeout

const backgroundSaveToLocalStorage = (formDetails: FormDetails) => {

    clearTimeout(timeout)

    timeout = setTimeout(() => {
        localStorage.setItem("form-details", JSON.stringify(formDetails))
    }, 500)
}

export const formDetailsSlice = createSlice({
    name: 'formDetails',
    initialState,
    reducers: {
        setUserInfo: (state, action: PayloadAction<FormDetails["userInfo"]>) => {
            state.userInfo = action.payload

            // to prevent input delay because of the multiple disk writes
            const plainObjectFormDetails = JSON.parse(JSON.stringify(state))
            backgroundSaveToLocalStorage(plainObjectFormDetails)
        },
        setSelectedPlan: (state, action: PayloadAction<FormDetails["selectedPlan"]>) => {
            state.selectedPlan = action.payload
            localStorage.setItem("form-details", JSON.stringify(state))
        },
        setPlanType: (state, action: PayloadAction<FormDetails["planType"]>) => {
            state.planType = action.payload
            localStorage.setItem("form-details", JSON.stringify(state))
        },
        setAddOns: (state, action: PayloadAction<FormDetails["addOns"]>) => {
            state.addOns = action.payload
            localStorage.setItem("form-details", JSON.stringify(state))
        },
        setSavedFormDetails: () => {
            const savedFormDetails = localStorage.getItem("form-details")

            if (savedFormDetails) {
                return JSON.parse(savedFormDetails)
            }
        },
        resetFormDetails: () => {
            localStorage.removeItem("form-details")
            return {...initialState}
        }
    }
})

export const {
    setUserInfo,
    setSelectedPlan,
    setPlanType,
    setAddOns,
    setSavedFormDetails,
    resetFormDetails

} = formDetailsSlice.actions

export const selectFormDetails = (state: RootState) => state.formDetails;

export default formDetailsSlice.reducer