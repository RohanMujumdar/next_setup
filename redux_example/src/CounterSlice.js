import { createSlice } from "@reduxjs/toolkit"


const counterSlice=createSlice({
    name: "counterSlice",
    initialState:{
        count: 0,
        delta:1,
    },
    reducers:{
        increment:(state)=>{
            state.count+=state.delta
        },
        decrement:(state)=>{
            state.count-=state.delta
        },
        incrementDelta:(state, params)=>{
            state.delta=params.payload
        }
    }
})

export const {increment, decrement, incrementDelta}=counterSlice.actions
export default counterSlice;