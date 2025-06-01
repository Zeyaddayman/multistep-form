import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store';
import { IFormDetails, ISelectedPlan, TUserInfo } from '@/app/interfaces';
import { PLAN_TYPES } from '@/app/constants';

const initialState: IFormDetails = {
    userInfo: {
        name: '',
        email: '',
        phone: ''
    },
    planType: "monthly",
    selectedPlan: PLAN_TYPES[0],
    addOns: []
}

export const formDetailsSlice = createSlice({
    name: 'formDetails',
    initialState,
    reducers: {
        setUserInfo: (state, action: PayloadAction<TUserInfo>) => {
            state.userInfo = action.payload;
        },
        setSelectedPlan: (state, action: PayloadAction<ISelectedPlan>) => {
            state.selectedPlan = action.payload;
        },
        setPlanType: (state, action: PayloadAction<IFormDetails["planType"]>) => {
            state.planType = action.payload;
        },
        setAddOns: (state, action: PayloadAction<IFormDetails["addOns"]>) => {
            state.addOns = action.payload;
        }
    }
})

export const {
    setUserInfo,
    setSelectedPlan,
    setPlanType,
    setAddOns
    
} = formDetailsSlice.actions

export const selectFormDetails = (state: RootState) => state.formDetails;

export default formDetailsSlice.reducer