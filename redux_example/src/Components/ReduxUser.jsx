import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import userSlices from '../Slices/userSlices'
import fetchMiddleware from '../middleware/fetchMiddleware'


const actions=userSlices.actions

function ReduxUser() {

    const{user, loading, error}=useSelector((store)=>store.userSlices)
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(fetchMiddleware())
    },[])

    if(loading)
    {
        return <div>...loading</div>
    }
    if(error)
    {
        return <div>Error: {error.message}</div>
    }
  return (
    <div>
        {user?(
        <>
            Name: {user.name} <br/>
            Phone Number: {user.phone}
        </>
        ):(
            <div>....Loading</div>
        )}
    </div>
  )
}

export default ReduxUser
