import React, { useState } from 'react'

const UseState = () => {

    const [count,setCount]=useState(0);
    const [statevalue,setStatevalue]=useState('Update State Value here');

    const inc=()=>{
        setCount(count+1)
    }

    const dec=()=>{
        setCount(count-1);
    }
    const updatevalue=()=>{
        setStatevalue('hi am update state value using useState Hook...')
    }
  return (
    <div>
        <h1>{count}</h1>
        <h3>{statevalue}</h3>

        {/* function in button */}
        <button onClick={()=>setCount(count+1)}>Increment</button>

        <button onClick={inc}>Increment</button>
        <button onClick={dec}>Decrement</button>
        <button onClick={updatevalue}>Update</button>

    </div>
  )
}

export default UseState