import { configureStore } from "@reduxjs/toolkit";
import CountSlice from './reducers/counterSlice';
import ProductSlice from './reducers/products/productSlice';
import CartSlice from './reducers/cart/CartSlice';




export const store = configureStore({
    reducer:{
        counter:CountSlice,
        allProducts:ProductSlice,
        cart:CartSlice,
    }
})