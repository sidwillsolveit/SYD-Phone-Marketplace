import React from 'react';

import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="main-header">
      <div className="header-left">
        <button
          className="login-btn"
          onClick={() => navigate('/login')}
        >
          LOGIN
        </button>
        <span className="company-logo">
          SYD
        </span>
      </div>
      <nav className="header-nav">
        <Link to="/">HOME</Link>
        <Link to="/motive">OUR MOTIVE</Link>
        <Link to="/upcoming">UPCOMING PRODUCTS</Link>
        <Link to="/about">ABOUT US</Link>
        <button
          className="contact-btn"
          onClick={() => navigate('/contact')}
        >
          CONTACT US
        </button>
      </nav>
    </header>
  );
};

export default Header;
