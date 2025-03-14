import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <Link to="/" className="home-link">
          <img src="/images/org_logo.png" alt="Logo" className="logo" />
          <span className="site-title">Samudbhav</span>
        </Link>
      </div>
      <nav className="header-nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/chapters" className="nav-link">Chapters</Link>
      </nav>
      <div className="header-right">
        <img src="/images/login_icon.png" alt="Login" className="login-icon" />
      </div>
    </header>
  );
}

export default Header;
