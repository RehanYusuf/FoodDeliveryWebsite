import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({

    name: 'cart',
    
    initialState: {
        items: []
    },

    reducers: {
        addItem: (state,action) => {
           state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items.length = 0;
        }
    }

})

export const {addItem,removeItem,clearCart} = Slice.actions;

export default Slice.reducer;