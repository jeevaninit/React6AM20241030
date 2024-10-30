import React from 'react'
import SignIn from './SignIn';
import SignUp from './SignUp';

const Conditiontest = () => {

    const isLoading=true;
    const isError=false;

  return (
    <div>
        <h1>Condition Test</h1>

        {!isError && isLoading &&(
            <div className='buttons'>
                <SignIn />
                <SignUp />        
            </div>
            )}

        {isError&&<p>Authentication Error</p>}
        {!isError && isLoading && <p>Page is Loading....</p>}
    </div>
  )
}

export default Conditiontest