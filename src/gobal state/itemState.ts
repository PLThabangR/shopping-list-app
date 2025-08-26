import { useReducer } from "react";
import { Item } from '../types/ShoppingList';


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
