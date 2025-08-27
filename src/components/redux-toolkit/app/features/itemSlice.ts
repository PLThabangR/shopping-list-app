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
    updateItem:(state,action:PayloadAction<Item>)=>{
        const updatedItem = action.payload;//get the updated item

        const itemToUpdate = state.items.find((item) => item.id === updatedItem.id);
        //if item exist update it
        if (itemToUpdate) {
            state.items = state.items.map((item) => (item.id === updatedItem.id ? updatedItem : item));
        }
        
    },//end of update

    deleteItem:(state,action:PayloadAction<Item>)=>{
        const id = action.payload.id;//get the item id
        state.items = state.items.filter((item) => item.id !== id);
        
    },//end of delete
    //clear state 
    clearItems: (state) => {
      state.items = [];  
    },


}//end of reducers


  })//end of createSlice


  //exporting the slice
  export const { addItems,updateItem,deleteItem,clearItems } = itemSlice.actions;
  export default itemSlice.reducer