import React, { useState } from 'react';
import logo from "../images/logo.svg";

const Nav = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggle = () => {setMenuOpen(!menuOpen)};


  return (
    <header className="header" id="top">
      <div className="container">
        <nav className={`header__nav ${menuOpen ? "open": ""}`}>
            <a href="#" className="header_logo">
                <img src={logo} alt="logo" />
          </a>

          {/* mobile nav bar */}
          <div className="menu-icon" onClick={menuToggle}>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
          </div>

            <menu className={`nav-links ${menuOpen ? "visible": ""}`}>
                <ul className='header__menu'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="/booking">Book a table</a></li>
                    <li><a href="#">LogIn</a></li>
      
                </ul>
            </menu>
        </nav>
      </div>
    </header>
  );
};

export default Nav;