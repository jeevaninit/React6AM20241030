import React, { createContext } from 'react'
import ChildOne from './ChildOne';
import ChildTwo from './ChildTwo';

const MyContextOne=createContext();
const MyContextTwo=createContext();

const UseContext = () => {
   /*  const content='Hello am from Parent Component...' */
  return (
    <div>
        UseContext
        <MyContextOne.Provider
        value={'Hello am from Parent Component...'} 
        >
        <ChildOne />
        <ChildTwo />
        </MyContextOne.Provider>

        <MyContextTwo.Provider
        value={'am from React class 6am...'}
        >
        <ChildTwo />
        
        </MyContextTwo.Provider>

    </div>
  )
}

export default UseContext;
export {MyContextOne,MyContextTwo};
