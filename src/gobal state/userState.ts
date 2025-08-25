import type { User } from "@/types/User";
import { useReducer } from "react";



interface UserAction{
    type:string,
    payload:{
        email:string,
        password:string,
        firstName:string,
        lastName:string,
        cellNumber:number
    }
}


//initial state
const initialState : User[] = [
   { email: "",
    password: "",
    firstName: "",
    lastName: "",
    cellNumber:0}
]

interface UserState{
    users:User[] //array will store users
}


export const useUser =()=>{
    const [state,dispatch] = useReducer(userReducer,{users:initialState});
    console.log(" the current state ",state)
    return {state,dispatch}
}

const userReducer = (state:UserState,action:UserAction):UserState=>{
        console.log("action",action.payload)
    switch(action.type){
        case "SET_USER":
            return {
                //spread to retain old values
              ...state,
            users:[...state.users,action.payload]//add new user to array

            }
        default:
            return state;
    }
}