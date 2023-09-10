import React, { useState, useEffect } from 'react'
import './Header.css';

const Header = () => {
    /*=============== Change Navbar Color ===============*/
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        if (this.scrollY >= 70) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header")
    })

  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home")
    
  return (
      <header className="header">
            <nav className='nav container'>
                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <a href="/" className='logo'>
                        <h1 className='logo__menu'>mininako</h1>
                    </a>
                    <ul className="nav__list first">
                        <li className="nav__item">
                            <a href="#home" 
                            className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}
                            onClick={() => setActiveNav('#home')}
                            >Home</a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" 
                            className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}
                            onClick={() => setActiveNav('#about')}
                            >About</a>
                        </li>
                        <li className="nav__item">
                            <a href="#bouquet" 
                            className={activeNav === "#bouquet" ? "nav__link active-link" : "nav__link"}
                            onClick={() => setActiveNav('#bouquet')}
                            >Bouquet</a>
                        </li>
                        
                    </ul>
                    <ul className="nav__list second">
                        <li className="nav__item">
                            <a href="#other" 
                            className={activeNav === "#other" ? "nav__link active-link" : "nav__link"}
                            onClick={() => setActiveNav('#other')}
                            >Other</a>
                        </li>
                        <li className="nav__item">
                            <a href="#testimoni" 
                            className={activeNav === "#testimoni" ? "nav__link active-link" : "nav__link"}
                            onClick={() => setActiveNav('#testimoni')}
                            >Testimoni</a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" 
                            className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}
                            onClick={() => setActiveNav('#contact')}
                            >Contact</a>
                        </li>
                    </ul>
                </div>
                <div className='nav__toggle'>
                        <a href="#" className='logo'>
                            <h1 className='logo__menu-mobile'>mininako</h1>
                        </a>
                        <div className="wrapper-hamburger">
                            <label className='hamburger'>
                                <input type="checkbox" 
                                onClick={() => showMenu(!Toggle)}/>
                                <svg viewBox="0 0 32 32">
                                    <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                                    <path className="line" d="M7 16 27 16"></path>
                                </svg>
                            </label>
                        </div>
                        {/* <LuPanelLeftClose 
                        className={!Toggle ? "menu-logo" : "menu-hidden"}
                        onClick={() => showMenu(!Toggle)}/>
                        <LuPanelRightClose 
                        className={Toggle ? "close-btn" : "close-hidden"}
                        onClick={() => showMenu(!Toggle)}/> */}
                </div>
            </nav>
            <div className={Toggle ? "bg-dark" : ""}></div>
        </header>
  )
}

export default Header