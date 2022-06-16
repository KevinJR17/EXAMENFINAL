import React from 'react'
import '../styles/Home.css'
import Cards from './Cards'
import ace from '../imagenes/ACE.png'
const tienda=[
  {
    id:"1",
    img: ace,
    name:"Aceite-1",
    precio:"180bs"
  },
  {
    id:"2",
    img: ace,
    name:"Aceite-2",
    precio:"140bs"
  },
  {
    id:"3",
    img: ace,
    name:"Aceite-3",
    precio:"160bs"
  }
]

function Home(props) {
  return (
   <section className='section-home'>
    {
        tienda.map(card => (
          <Cards img={card.img} name={card.name} precio={card.precio}/>
        ) )
    }
   </section>
  )
}
export  {Home}