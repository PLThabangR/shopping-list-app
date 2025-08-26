import { useReducer } from "react";
import type { Item } from '../types/ShoppingList';


interface ItemAction{
    type:string,
    payload:{
        name:string,
        email:string,
        quantity:number,    
        notes:string,
        category:string,
        imageUrl:string
    }
}

interface ItemState{
    items:Item[]
}

// item initial state
const initialState:ItemState = {
    items:[]
}

//creating our function reducer
const itemReducer = (state:ItemState,action:ItemAction):ItemState=>{
    console.log("action from get items ",action)
    switch(action.type){
        case "ADD_ITEM":
            return {
                ...state,
                items:[...state.items,action.payload]
            }

        default:
            return state;
    }
}

export const useItem =()=>{
    //We are setting our use reducer with action and state
    const [state,dispatch] = useReducer(itemReducer,initialState);
    console.log("this is the state array",state)
    return {state,dispatch}
}