import React, { useContext } from 'react'
import { MyContextOne, MyContextTwo } from './UseContext'
import { Mycontext } from './ContextApi';

const ChildTwo = () => {
    const valuefromparent=useContext(MyContextTwo);
    const value2=useContext(MyContextOne);
    const myapidata=useContext(Mycontext);

  return (
    <div>
    <h1>ChildTwo</h1>

    <p>{valuefromparent}</p>
    <p>{value2}</p>
    <ul>
 {/*      <li>Skill: {myapidata.skill}</li> */}
     {/*  <li>Level: {myapidata.level}</li> */}
{/*       <li>Duration: {myapidata.duration}</li> */}
    </ul>
    </div>
  )
}

export default ChildTwo