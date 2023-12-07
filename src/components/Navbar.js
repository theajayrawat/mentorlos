import React from 'react'
import "./Navbar.css"
import logo from "../asset/Group.png"
import link from "../asset/link.png"

const Navbar = () => {
  return (
    <div className='navbar'>
     <div className='nav'>
     <div className='nav-link'>
        <img src={logo} alt='logo'/>

        <div className='mentero-text'>Mentorlo</div>
      </div>
      <button className="login-button">
       <span className="login-text">Login</span>

      </button>
      <img src={link} className='link' alt='logo'/>

     </div>
      
                     
    </div>
  )
}

export default Navbar
