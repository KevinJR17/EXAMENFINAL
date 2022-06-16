import React from 'react'

function Cards({img ,name ,precio}) {
  return (
    <div className='card-container'>
        <img src={img} alt="Produto" />
        <hr />
        <span>{name}</span>
        <span>{precio}</span>
    </div>
  )
}

export default Cards