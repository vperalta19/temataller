import React, {useState} from 'react';
import {NavLink} from 'react-router-dom'
import '../assets/css/Toolbar.css'
import logo from '../assets/img/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
  

export default function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  
  return (
    <div className='header'>
     <div className={click ? "main-container" : ""}/>
      <nav className="navbar" onClick={(e)=>e.stopPropagation()}>
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img src={logo} alt="logo"/>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/sobre-nosotros"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Sobre nosotros
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/clases"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Clases
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contacto"
                activeClassName="active"
                className="nav-links"
               onClick={click ? handleClick : null}
              >
                Contacto
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <FontAwesomeIcon icon={click ? faTimes : faBars} />
          </div>
        </div>
      </nav>
    </ div>
  );
}