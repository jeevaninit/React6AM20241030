import React, { useRef } from 'react'

export const UseRef = () => {
    const myRefid=useRef(null);
    const divref=useRef(null);

    const changediv=()=>{
        divref.current.classList.toggle('active');
    }

  return (
    <div className='refcontent'>
    <h2>UseRef</h2>
    <h1 ref={myRefid}>Hello am from UseRef Hook...</h1>
    <div ref={divref}>
        hi.. div content here..
    </div>
    <button onClick={
        ()=>{
            myRefid.current.innerHTML='Change Default Text in the Heading...';
        }
    }>Change Content</button>
    <button onClick={changediv}>Change Div</button>
    </div>
  )
}
