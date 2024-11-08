import React, { useContext } from 'react'
import { Mycontext } from './ContextApi'

const Child_03 = () => {
    const myapidata=useContext(Mycontext);
  return (
    <div>
        <h1>Child_03</h1>
        <ul>
        <li>{myapidata.skill}</li>
        <li>{myapidata.level}</li>
        <li>{myapidata.duration}</li>
        </ul>
    </div>
  )
}

export default Child_03