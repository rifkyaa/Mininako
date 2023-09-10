import React from 'react'
import "./Footer.css"
import { FaInstagram, FaTiktok } from 'react-icons/fa'

const Footer = () => {
  return (
    <section className="section__footer">
        <span className='cr__contact'>&copy;2023 Copyright Mininako All Right Reserved</span>
        <div className="social__icon">
            <a href="#" className='instagram-icon'><FaInstagram /></a>
            <a href="#" className='tiktok-icon'><FaTiktok /></a>
        </div>
    </section>
  )
}

export default Footer