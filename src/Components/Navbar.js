import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import myImage from './bworks.png';

const Navbar = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem('token');

    if(token) {
      const name = localStorage.getItem('name');
      setUser(name); 
      console.log(name);
    }
  }, []);
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    window.location.href = "/";
  }  
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "white", height: "60px" }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"><img src={myImage} alt="Description of the image" style={{ width: '200px', height: 'auto' }} /></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item" style={{ fontSize: "20px", paddingLeft: "10px" }}>
              <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
            </li>
            <li className="nav-item" style={{ fontSize: "20px", paddingLeft: "10px" }}>
              <Link className="nav-link active" aria-current="page" to="/register">Register</Link>
            </li>
            <li className="nav-item" style={{ fontSize: "20px", paddingLeft: "10px" }}>
              <Link className="nav-link" to="/about">About</Link> 
            </li>
          </ul>
        </div>
        <div>
          <span>Welcome {user}!</span>
          <button onClick={handleLogout}>Logout</button> 
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
