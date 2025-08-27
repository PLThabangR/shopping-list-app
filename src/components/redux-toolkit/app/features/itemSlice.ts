import { createSlice } from "@reduxjs/toolkit";
import type { Item } from '../../../../types/ShoppingList';




interface ItemState{
    items:Item[]
}

// item initial state
const initialState:ItemState = {
    items:[]
}


  createSlice({
name: "items",
    initialState,
    reducers: {
    addItems: (state, action: { payload: Item }) => {
        state.items.push(action.payload);
    },
    updateItems:(state,action:{payload:{updatedItem:Item}})=>{
        const updatedItem = action.payload.updatedItem;
        return state.items.filter((item) => item.email !== updatedItem.email)[0];
        
    },//end of update

    deleteItems:(state,action:{payload:{email:string}})=>{
        const email = action.payload.email;
        return state.items.filter((item) => item.email !== email)[0];
        
    }//end of delete


}//end of reducers


  })//end of createSlice

