import React from 'react'
import logo from '../../public/logo.png'
import './header.css'

export default function Header() {
  return (
    <div className='header'>
        <div className='logo'><img src={logo} alt="" /></div>
        <div className="menu">
            <ul>
                <li><button className="btn-session">Cursos</button></li>
                <li><button className="btn-session">Contacto</button></li>
                <li><button className="btn-session">Testimonios</button></li>
                <li><button className="btn-session">Empresas</button></li>
            </ul>
        </div>
        {
          window.localStorage.getItem('token') ?
          
        <button className="btn-session">Desloguearse</button>
        :
        <div className="sesion-user">
            <button className="btn-session">Registrarse</button>
            <div className='separator'></div>
            <button className="btn-session">Iniciar Sesión</button>
        </div> 
        }
        
    </div>

  )
}
