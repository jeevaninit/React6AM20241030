import React from 'react'

const DisplayListItems = () => {
    const fruits=['Apple','Banana','Cherry','Date','Orange'];
    const courses=['React','Angular','Node','MYSQL','Java'];
  return (
    <div>
        <h1>DisplayListItems</h1>
        <ul>
         
        {fruits.map(
            (fruit,index)=>(
               <li key={index}>{fruit}</li> 
            )
            )}
        </ul>

        <ul>
         
         {courses.map(
             (course,index)=>(
                <li key={index}>{course}</li> 
             )
             )}
         </ul>

    </div>
  )
}

export default DisplayListItems