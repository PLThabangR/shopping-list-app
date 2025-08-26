import type { User } from "@/types/User";
import { useReducer } from 'react';



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

interface UserState{
    users:User[] //array will store users
}

//initial state
const initialState : UserState= {
users: [ 
    //Start with an empty string
],
}



//logget user
const LoggedUser : User = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    cellNumber:0
}
//reducers
const userReducer = (state:UserState,action:UserAction):UserState=>{
        console.log("action from get users ",action)
    switch(action.type){
        case "SET_USER":
            return  {
                ...state,
                users:[...state.users,action.payload]
            }
              
            
        default:
            return state;
    }
}

//logged user reducer
const loggedUserReducer = (state:User,action:UserAction):User=>{
    switch(action.type){
        case "SET_LoggedUser":
            return {
                email:action.payload.email,
                password:action.payload.password,
                firstName:action.payload.firstName,
                lastName:action.payload.lastName,
                cellNumber:action.payload.cellNumber
            }

        case "LOGOUT_USER":
            return {
                email: "",
                password: "",
                firstName: "",
                lastName: "",
                cellNumber:0
            }
        default:
            return state;
    }
}
export const useUser =()=>{
    //We are setting our use reducer with action and state
    const [state,dispatch] = useReducer(userReducer,initialState);
    console.log("this is the state ",state)
    return {state,dispatch}
}

export const loggerUser = ()=>{
const [state,dispatch] = useReducer(loggedUserReducer,LoggedUser);
    // console.log("this is the logged user ",state.email)
//set logged user 
return {state,dispatch}
}


