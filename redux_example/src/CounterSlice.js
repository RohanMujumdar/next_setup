import { createSlice } from "@reduxjs/toolkit"


const counterSlice=createSlice({
    name: "counterSlice",
    initialState:{
        count: 100,
    },
    reducers:{
        increment:(state)=>{
            state.count++
        },
        decrement:(state)=>{
            state.count--
        }
    }
})

export const {increment, decrement}=counterSlice.actions
export default counterSlice;