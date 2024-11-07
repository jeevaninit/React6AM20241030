import React from 'react'
import { MyContextOne } from './UseContext';
import { useContext } from 'react';

const ChildOne = () => {
    const valuefromparent=useContext(MyContextOne);
  return (
    <div>
    
    <h1>ChildOne</h1>
        <p>{valuefromparent}</p>
    </div>
  )
}

export default ChildOne