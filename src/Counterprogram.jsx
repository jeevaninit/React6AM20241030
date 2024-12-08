import React, { useState } from 'react'

const Counterprogram = () => {
    const [count,setCount]=useState(0);

    const myfunc=()=>{
        console.log('Hello hi');
        console.log('am from myfunction line-2');
    }

    const increase=()=>{
        setCount(count+1);
    }
    const decrease=()=>{
        setCount(count-1);
    }
  return (
    <div>
    
        counterprogram
        <p>{myfunc()}</p>
        <p>{count}</p>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        </div>
  )
}

export default Counterprogram