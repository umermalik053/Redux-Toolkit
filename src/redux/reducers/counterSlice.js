import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count:0,
}


const CountSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment : (state)=>{
            state.count +=1
        },
        decrement : (state)=>{
            if(state.count <= 0){
                state.count = 0
            }
            else{
                state.count -=1
            }
        }


    }
})


export const {increment,decrement} = CountSlice.actions;
export default CountSlice.reducer;