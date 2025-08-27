import {configureStore} from "@reduxjs/toolkit"
import authReducer from "./features/authSlice"


//configure store
export const store = configureStore({
    //We passing slices and reducers
    reducer: {
        auth: authReducer
    }
})

//Add type to store for typescript to understand the type of store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch