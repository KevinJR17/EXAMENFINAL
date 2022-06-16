import React from 'react'
import '../styles/Error.css'
import errorimg from '../imagenes/logo.png'
function Error() {
  return (
    <div className='Ventana'>
        <h1>Error 404</h1>
        <img src={errorimg} alt="" />
    </div>
  )
}

export  {Error}