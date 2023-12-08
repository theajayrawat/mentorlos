import React from 'react'
import "./Footer.css"
import logo from "../asset/whitei.png"

const Footer = () => {
  return (
    <div className="main">
      <div className='nav-link'>
        <img src={logo} alt='logo'/>
        <div className='mentero-text'>Mentorlo</div>
      </div>
      <div className="line">
      <hr></hr>
      </div>
      
      <div className='bottom'>
        <ul class="first">
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
          <li>Cookie Policy</li>
        </ul>
        <ul class="second">
          <li>Home</li>
          <li>Find Mentor</li>
          <li>Book Demo</li>
        </ul>
        <p class="third">All Rights Reserved. Copyright.</p>
      </div>
    </div>
  )
}

export default Footer
