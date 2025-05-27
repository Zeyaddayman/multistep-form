import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store';
import { IFormDetails, ISelectedPlan, TUserInfo } from '@/app/interfaces';

const initialState: IFormDetails = {
    userInfo: {
        name: '',
        email: '',
        phone: ''
    },
    planType: "monthly",
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
        }
    }
})

export const { setUserInfo, setSelectedPlan } = formDetailsSlice.actions

export const selectFormDetails = (state: RootState) => state.formDetails;

export default formDetailsSlice.reducer