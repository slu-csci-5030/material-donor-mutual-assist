import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    setIsLoggedIn(false);
    window.location.href = "/";
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="/bworks.png" alt="BWorks Logo" style={{ width: '100px', height: '50px' }} />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {!isLoggedIn && (
              <>
                <li className="nav-item" style={{ fontSize: "20px", paddingLeft: "10px" }}>
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item" style={{ fontSize: "20px", paddingLeft: "10px" }}>
                  <Link className="nav-link" to="/register">Register</Link>
                </li>
                <li className="nav-item" style={{ fontSize: "20px", paddingLeft: "10px" }}>
                  <Link className="nav-link" to="/about">About</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        {isLoggedIn && (
          <div>
            <span>Welcome {localStorage.getItem('name')}!</span>
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
