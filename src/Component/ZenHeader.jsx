import React, {useState} from 'react'
import './Project.css'
import LandingPage from '../Pages/LandingPage'
import {NavLink, Link, useMatch, useResolvedPath} from 'react-router-dom'


const ZenHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
  <>
    <div>
     <div className="con">
      <h1 className="logo">Zephyr</h1>
      <div className="menu" onClick={() => {
        setMenuOpen(!menuOpen);
        }}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
       <nav className="nav">
        <ul className={menuOpen ? "open" : ""}>
          <li className='home'><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/About">About</NavLink></li>
          <li><NavLink to="/Services">Services</NavLink></li>
          <li><NavLink to="/Contact">Contact</NavLink></li>
        </ul>
       </nav>
     </div>    
    </div>
  </>  
  )
}

export default ZenHeader
