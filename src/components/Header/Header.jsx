import React, { useState } from 'react'
import './Header.css';
import { BiMenuAltRight } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { LuPanelLeftClose, LuPanelRightClose } from "react-icons/lu";

const Header = () => {
  const [Toggle, showMenu] = useState(false);
    
  return (
      <header className="header">
            <nav>
                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <a href="#" className='logo'>
                        <h1 className='logo__menu'>mininako</h1>
                    </a>
                    <ul className="nav__list first">
                        <li className="nav__item">
                            <a href="#home" className='nav__link'>Home</a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className='nav__link'>About</a>
                        </li>
                        <li className="nav__item">
                            <a href="#bouquet" className='nav__link'>Bouquet</a>
                        </li>
                        
                    </ul>
                    <ul className="nav__list second">
                        <li className="nav__item">
                            <a href="#flower" className='nav__link'>Flower</a>
                        </li>
                        <li className="nav__item">
                            <a href="#team" className='nav__link'>Team</a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className='nav__link'>Contact</a>
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