import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import counterSlice from '../CounterSlice'
import { useState } from 'react'
const actions=counterSlice.actions

function ReduxCounter() {
  
  const count=useSelector((store)=>store.counterState.count)
  const [val, setVal]=useState("")
  const dispatch=useDispatch()

  const incrementDelta=()=>{

    const delta=val===""?"1":val
    dispatch(actions.incrementDelta(Number(delta)))
  }
  const increment=()=>{
    dispatch(actions.increment())
  }

  const decrement=()=>{
    dispatch(actions.decrement())
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incrementDelta}>Delta</button>
      <input type="text" value={val} onChange={(e)=>setVal(e.target.value)}></input>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default ReduxCounter
