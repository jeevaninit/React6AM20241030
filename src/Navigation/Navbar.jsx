import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const menuitems=[
        {label:'Home',path:'/home'},
        {label:'About',path:'/about'},
        {label:'Services',path:'/services'},
        {label:'Career',path:'/career'},
        {label:'Courses',path:'/courses'},
        {label:'Contact',path:'/contact'},
    ];

    const navigate=useNavigate();

    const eventhandle=(path)=>{
        navigate(path)
    }

  return (
    <div>
        <ul>
            {menuitems.map((item,index)=>(
                <li key={index} onClick={()=>eventhandle(item.path)}>{item.label}</li>
            ))}
        </ul>
    </div>
  )
}

export default Navbar