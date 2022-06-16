import React from 'react'
import { BrowserRouter, Routes ,Route,NavLink } from 'react-router-dom'
import { Home } from '../componentes/Home'
import { Paguno } from '../componentes/Paguno'
import { Pagdos } from '../componentes/Pagdos'
import { Error } from '../componentes/Error'
import '../styles/Navbar.css'
function Navbar() {
  return (
    <BrowserRouter>
    <header className='menu'>
        <h1>TIENDA KEVIN CAR</h1>
        <nav>
            <ul className='ul-menu'>
                    <NavLink to="/Home">
                        <li>Home</li>
                    </NavLink>
                    <NavLink to="/Paguno">
                        <li>Pagina Uno</li>
                    </NavLink>
                    <NavLink to="/Pagdos">
                        <li>Pagina Dos</li>
                    </NavLink>
            </ul>
        </nav>
    </header>
    <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Paguno' element={<Paguno/>}/>
        <Route path='/Pagdos' element={<Pagdos/>}/>
        <Route path='/*' element={<Error/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export  {Navbar}