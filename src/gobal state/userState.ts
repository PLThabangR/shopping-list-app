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
    //set logged user in local storage
     localStorage.setItem("loggedUser", JSON.stringify(action.payload));
    switch(action.type){
        case "SET_LoggedUser":
            return {
                ...action.payload
            }

        case "LOGOUT_USER":
            localStorage.removeItem("loggedUser");
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
const storedUser = localStorage.getItem("loggedUser");
  const initial:User = storedUser ? JSON.parse(storedUser) : LoggedUser;


//We are setting our use reducer with action and state
const [state,dispatch] = useReducer(loggedUserReducer,initial);
     console.log("this is the logged user ",state.email)
//set logged user 
return {state,dispatch}
}


