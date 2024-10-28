import React from 'react'
import { createSlice } from '@reduxjs/toolkit'


const userSlice=createSlice({
    name:"userSlice",
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
function userSlices() {
  return (
    <div>
      
    </div>
  )
}

export default userSlices
