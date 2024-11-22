import React, { useMemo } from 'react'

const UseMemo = () => {

    let num1=10;
    let num2=20;

    let sum=useMemo(
        ()=>{
            return num1+num2
        },[num1,num2]
    )

  return (
    <div>
        <h2>UseMemo</h2>
        <p>{sum}</p>

        </div>
  )
}

export default UseMemo