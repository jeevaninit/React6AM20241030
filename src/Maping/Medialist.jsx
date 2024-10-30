import React from 'react';
import itemsData from './itemsData';
import ItemCard from './ItemCard';
import './mediastyles.css';
const Medialist = () => {
  return (
    <div>
        <h1>Media Management</h1>
        <div className='item-list'>
            {itemsData.map((item)=>(
                <ItemCard 
                key={item.id}
                title={item.title}
                info={item.info}
                imgSrc={item.imgSrc}
                btn={item.btn}
                />
            ))
            
            }
        </div>
        
    </div>
  )
}

export default Medialist