import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items:[],
}

const CartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addCart:(state,{payload})=>{
          state.items.push(payload);
          
        },
        removeCart:(state,{payload})=>{
            state.items = state.items.filter((item)=>item.id !== payload.id)
        }
    }
})

export const {addCart,removeCart} = CartSlice.actions;
export default CartSlice.reducer;