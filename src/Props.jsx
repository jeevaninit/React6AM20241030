import React from 'react'
import Welcome from './Welcome';
import Bodycontent from './Bodycontent';

const Button=(props)=>{
    return(
        <>
        <button>{props.values}</button>
        </>
    )
}


const Props = () => {
    const welcomenote='Welcome to React States and Props';
    const session='6 Am';


  return (
    <div>

   <Welcome 
   content={welcomenote}
   class={session}
   />

   <Bodycontent 
   title={welcomenote}
   />
   
   <Button
   values={welcomenote}
   />
    </div>
  )
}

export default Props