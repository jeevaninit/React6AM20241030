import React from 'react'

const StateAndProps = () => {

    const userdetails={
        username:'Jeevan',
        password:123
    }

    const styles={
        header:{
            color:'green',
            fontSize:'30px',
            
        },
        para:{
            color:'red',
            fontSize:'12px'
        }
    }
    const headercontent='welcome to Header info';

  return (
    <div>
        <h1 style={styles.header}>{headercontent}</h1>
        <p style={styles.para}>User Name: {userdetails.username}</p>
        <p style={styles.para}>Password: {userdetails.password}</p>
        <p style={{color:'blue'}}>adding Inline Styles</p>
    </div>
  )
}

export default StateAndProps