import { configureStore } from '@reduxjs/toolkit'
import formDetailsReducer from './features/formDetailsSlice'

export const makeStore = () => {
    return configureStore({
        reducer: {
            formDetails: formDetailsReducer
        }
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']