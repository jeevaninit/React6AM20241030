import React from 'react'

const Welcome = (props) => {
  return (
    <div>
        <h1>Props</h1>
        <h1>{props.content}</h1>
        <p>{props.class}</p>
    </div>
  )
}

export default Welcome