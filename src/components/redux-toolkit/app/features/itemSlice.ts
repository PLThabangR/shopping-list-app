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
    addItems: (state, action) => {
        state.items.push(action.payload);
    },
   

    }
  })
