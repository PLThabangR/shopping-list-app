import { createSlice } from "@reduxjs/toolkit";
import type { User } from '../../../../types/User';



const user: User = { //initial user of type User
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    cellNumber:0
}
//initializing the state
 const initialState = {
    user: user
 }

export const authSlice = createSlice({
    name: "authentication",
    initialState,   //initial state imagine as use state
    
    // Reducers are like instructions of what to do with the each slice of the cake
    //they define how the information in a particular slice is updated/changed
    reducers: {
        login: (state, action: { payload: User }) => {
            console.log("action from login ",action)
            //set logged user in local storage
     localStorage.setItem("email", JSON.stringify(action.payload.email));
            state.user = action.payload;
        },
        logout: (state) => {
            //clear state on logout
            state.user = user;
        },

        updateUser: (state, action: { payload: User }) => {
            //update user state
            state.user = action.payload;
        }
    },
});

//we export the actions functions
export const { login, logout,updateUser } = authSlice.actions;
//we export the our reducer from our authSlice hence we use authSlice.reducer
export default authSlice.reducer;