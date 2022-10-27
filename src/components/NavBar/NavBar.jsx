import React from 'react' 
import CartWidget from '../CartWidget/CartWidget'
import './styles.css'

const NavBar = () => {
    return (
        <div className='header'>
            <span>
            <ul>
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#Blog">Blog</a></li>
                <li><a href="#Servicios">Servicios</a></li>
                <li><a href="#Contacto">Contacto</a></li>
                <li><a href="#Proyecto">Proyecto</a></li>
            </ul>
            </span>
            <span>
            <CartWidget />
            </span>
        </div> 
    )
}

export default NavBar 