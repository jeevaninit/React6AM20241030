import React from 'react'

const ItemCard = ({title,imgSrc,info,btn}) => {
  return (
    <div className='item-card'>
        <img src={imgSrc} alt={title} className='item-image'/>
        <h3>{title}</h3>
        <p>{info}</p>
        <button className='read-more'>{btn}</button>
    </div>
  )
}

export default ItemCard