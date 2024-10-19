import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import counterSlice from '../CounterSlice'
const actions=counterSlice.actions

function ReduxCounter() {
  
  const count=useSelector((store)=>store.counterState.count)
  const dispatch=useDispatch()

  const increment=()=>{
    dispatch(actions.increment())
  }

  const decrement=()=>{
    dispatch(actions.decrement())
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default ReduxCounter
