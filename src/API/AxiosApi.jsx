import React, { useState,useEffect } from 'react'
import axios from 'axios'

const AxiosApi = () => {
    const [data,setData]=useState([]);

    useEffect(
        ()=>{
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then(
                response=>setData(response.data)
            )
        },[]
    )

  return (
    <div>
        <h1>AxiosApi</h1>
        <div>
            {data.map(item=><li key={item.id}>
                {item.username} {item.name}
            </li>)}
        </div>
    </div>
    
  )
}

export default AxiosApi