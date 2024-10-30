import React, { useState } from 'react'
import StateAndProps from './StateAndProps';
import UseState from './UseState';

const Conditionalrender = () => {

    const [isLoggedIn,setIsLoggedIn]=useState(false);
    const [hasunread,setHasunread]=useState(false);
     const condition=false;
     const [status,setStatus]=useState('loading');

    //using if statements
/*     if(isLoggedIn){
        return <h1>Welcome to Mr. Jeevan...</h1>
    }else {
        return <h1>Please Log In..</h1>
    }
 */

    // using ternary operator

/*   return (
    <div>
        
        {isLoggedIn?<h1>Welcome to Mr. Jeevan...</h1>:<h1>Please Log In..</h1>}
        {condition?<StateAndProps />:<UseState />}
    </div>
  )  */

//using Logic && operator

/* return(
    <>
    <h1>Welcome to Logic Render ...</h1>
    {hasunread && <p>You have unread Message....</p>}
    </>
) */

    //using switch
    let message;

switch(status){
    case 'loading':
        message=<p>Loading please wait....</p>;
        break;
    case 'success':
        message=<p>Data Loading Successfully..</p>
        break;
    case 'error':
        message=<p>Error loading Data...</p>
        break;
        default:
            message=null;
    }

    return(
        <>
        {message}
        </>
    )

}

export default Conditionalrender