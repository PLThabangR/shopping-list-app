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
    //We are setting our use reducer with action and state
    const [state,dispatch] = useReducer(userReducer,{users:initialState});
    return {state,dispatch}
}

const userReducer = (state:UserState,action:UserAction):UserState=>{
       
    switch(action.type){
        case "SET_USER":
            return {
                //spread to retain old values
            
            users:[...state.users,action.payload]//add new user to array

            }
        default:
            return state;
    }
}