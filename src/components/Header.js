// Header.js
import React from 'react';
import '../styles/Header.css';
const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>
            <img style={{width:'100px'}} src='https://www.idealz.com/on/demandware.static/Sites-Idealz-ae-Site/-/default/dw3a3f24e0/images/newlogo/new-logo@3x.png'/>
        </h1>
      </div>
      <nav>
        <ul className="nav-links">
          <li><a href="#home">Need Help? Contact us</a></li>
          <li><a href="#about">Call 0800-IDEALZ</a></li>
          <li><a href="#services">AED</a></li>
          <li><a href="#contact">العربية</a></li>
          <li><a href='#login'>Register/Login</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
