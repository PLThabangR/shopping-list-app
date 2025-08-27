import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Item } from '../../../../types/ShoppingList';




interface ItemState{
    items:Item[]
}

// item initial state
const initialState:ItemState = {
    items:[]
}


export const itemSlice =  createSlice({
name: "items",
    initialState,
    reducers: {
        //My add reducer with type Item as payload
    addItems: (state, action:PayloadAction<Item>) => {
        state.items.push(action.payload);
    },
    updateItems:(state,action:PayloadAction<Item>)=>{
        const updatedItem = action.payload;//get the updated item

        const itemToUpdate = state.items.find((item) => item.email === updatedItem.email);
        //if item exist update it
        if (itemToUpdate) {
            state.items = state.items.map((item) => (item.email === updatedItem.email ? updatedItem : item));
        }
        
    },//end of update

    deleteItems:(state,action:{payload:{email:string}})=>{
        const email = action.payload.email;
        state.items = state.items.filter((item) => item.email !== email);
        
    }//end of delete


}//end of reducers


  })//end of createSlice


  //exporting the slice
  export const { addItems,updateItems,deleteItems } = itemSlice.actions;
  export default itemSlice.reducer