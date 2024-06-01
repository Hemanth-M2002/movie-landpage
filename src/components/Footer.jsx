import React from 'react'
import youtube from '../../src/assets/youtube_icon.png'
import twitter from '../../src/assets/twitter_icon.png'
import instagram from '../../src/assets/instagram_icon.png'
import facebook from '../../src/assets/facebook_icon.png'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={facebook} alt="" />
        <img src={instagram} alt="" />
        <img src={twitter} alt="" />
        <img src={youtube} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Audio Description</li>
        <li>Contact Us</li>
      </ul>
      <p className='copyright-text'>© Tech Innovators Inc. 2024</p>
    </div>
  )
}

export default Footer
