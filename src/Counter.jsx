import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount]=useState(0);

    const IncValue=()=>{
        setCount(count+10);
    }

  return (
    <div>
        <h1>Welcome to Counter Program..</h1>
        <p>{count}</p>
        <button onClick={IncValue}>IncValue</button>
    </div>
  )
}

export default Counter