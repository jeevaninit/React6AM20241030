import React, { useCallback } from 'react'

const UseCallBack = () => {
  //regular function
  
  const myfunction=()=>{
    console.log('Hello am from regular function...');
  }

  const count=11;

  const mycallbackfunction=useCallback(
    ()=>{
      console.log('Hello am from useCallBack function...')
    },[]
  )

  return (
    <div>
      <p>UseCallBack</p>
      <p>{myfunction()}</p>
      <p>{mycallbackfunction()}</p>
      <p>{count}</p>
      </div>
  )
}

export default UseCallBack