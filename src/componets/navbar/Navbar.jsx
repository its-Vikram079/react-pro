import React from 'react'
import navStyle from "./nav.module.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div id={navStyle.navWrapper} >
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/allusers">AllUsers</Link></li>
        <li><Link to="/careers">Careers</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/createusers">CreateUsers</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
