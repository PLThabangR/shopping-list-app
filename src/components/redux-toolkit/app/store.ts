import {configureStore} from "@reduxjs/toolkit"
import authReducer from "./features/authSlice"
import itemReducer  from "./features/itemSlice";


//configure store
export const store = configureStore({
    //We passing slices and reducers
    reducer: {
        auth: authReducer,
        items: itemReducer
    }
})

//Add type to store for typescript to understand the type of store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch