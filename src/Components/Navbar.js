import React from 'react';
import { Link } from 'react-router-dom';
import myImage from './bworks.png';

const Navbar = () => {
    // Retrieve user's name from local storage
    const userName = localStorage.getItem('userName');

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
                    <p className="nav-link">Welcome, {userName}</p>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
