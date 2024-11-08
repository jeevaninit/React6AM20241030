import React, { createContext, useState,useEffect } from 'react'

import Child_03 from './Child_03';

const Mycontext=createContext();

const ContextApi = () => {

/*     const [data,setData]=useState([]); */

    const apidata={
        skill:'React Js',
        level:'Advanced',
        duration:'5 Months'

    }

  /*   useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then((response) => response.json())
          .then((json) => setData(json));
      }, []); */

  return (
    <div>
        <Mycontext.Provider value={apidata}>
            <Child_03 />
        </Mycontext.Provider>
    </div>
  )
}

export default ContextApi
export {Mycontext}