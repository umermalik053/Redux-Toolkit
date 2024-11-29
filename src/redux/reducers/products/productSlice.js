import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    allProducts:[],
}

const ProductSlice = createSlice({
    name:'all_products',
    initialState,
    reducers:{
        getAllProducts:(state,{payload})=>{
            state.allProducts = payload;
        }
    }
})


export const {getAllProducts} = ProductSlice.actions;

export default ProductSlice.reducer;