import React from 'react'
import { createSlice } from '@reduxjs/toolkit'


const userSlices=createSlice({
    name:"userSlices",
    initialState:{
        user: null,
        loading: true,
        error: null,
    },
    reducers:{
        pending:(state)=>{
            state.user= null,
            state.loading= true,
            state.error= null
        },
        rejected:(state, params)=>{
            state.user=null,
            state.loading=false,
            state.error= params.payload
        },
        fulfilled:(state, params)=>{
            state.user=params.payload,
            state.loading=false,
            state.error=null
        }

    }
})
function userComponent() {
  return (
    <div>
      I am Rohan
    </div>
  )
}


export const {pending, rejected, fulfilled}=userSlices.actions
export default userSlices
