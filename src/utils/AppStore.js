import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './Slice.js'

const AppStore = configureStore({
     reducer: {
        cart: cartReducer
     },
});

export default AppStore;