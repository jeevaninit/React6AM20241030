import React, { useContext } from 'react'
import { MyContextOne, MyContextTwo } from './UseContext'

const ChildTwo = () => {
    const valuefromparent=useContext(MyContextTwo);
    const value2=useContext(MyContextOne);
  return (
    <div>
    <h1>ChildTwo</h1>

    <p>{valuefromparent}</p>
    <>{value2}</>
    </div>
  )
}

export default ChildTwo