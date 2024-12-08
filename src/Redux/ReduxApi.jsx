import React from 'react'
import { connect } from 'react-redux'
import UseContext from '../useContext/UseContext'
import { DecAction, IncAction } from './action'

const ReduxApi = ({wn,course,duration,institute,count,  IncAction,
  DecAction}) => {
  return (
    <div>
      <h1>ReduxApi</h1>
      <h1>Data from Redux: {wn}</h1>
      <p>Course: {course}</p>
      <p>Duration: {duration}</p>
      <p>Institute: {institute}</p>
      <p>Count Value:{count}</p>
      <button onClick={IncAction}>Increase Action</button>
      <button onClick={DecAction}>Decrease Action</button>
      <UseContext />
      </div>
  )
}


const mapStateToProps=(state)=>({
  wn:state.welcomenote,
  course:state.mydata.course,
  duration:state.mydata.duration,
  institute:state.mydata.institute,
  count:state.count,

})

export default connect(mapStateToProps,{IncAction,DecAction})(ReduxApi);
