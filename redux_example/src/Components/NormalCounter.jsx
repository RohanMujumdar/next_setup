import React, { useState } from 'react'

function NormalCounter() {

    const [count, setCount]=useState(0)
    const [delta, setDelta]=useState(1)
    const [val, setVal]=useState("")
    const incrementDelta=()=>{
        setDelta(Number(val))
       
    }

    const increment=()=>{
        setCount(count+delta)
        
    }

    const decrement=()=>{
        setCount(count-delta)
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

export default NormalCounter
