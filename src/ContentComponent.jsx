import React, { useState } from 'react'

const ContentComponent = () => {

    const [count,setCount]=useState(0);
    const updatevalue=countupdate;

    const incrementCount=()=>{
        setCount(count+updatevalue);
    }

  return (
    <div>
        <h1 data-testid="heading">Welcome to ContentComponent</h1>
        <p data-testid="paragraph">This is a sample paragraph</p>
        <p  data-testid="count_value">Count: {count}</p>
        <button onClick={incrementCount} data-testid="increment-button">Increment</button>
    </div>
  )
}

export default ContentComponent