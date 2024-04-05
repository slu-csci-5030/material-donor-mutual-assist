import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');
        const name = localStorage.getItem('name');

        if (token && name) {
            setIsLoggedIn(true);
            setUser(name);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        setIsLoggedIn(false);
        setUser('');
        window.location.href = "/";
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/"><img src="/bworks.png" alt="Description of the image" style={{ maxWidth: '100px', height: 'auto' }} /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {isLoggedIn && (
                            <li className="nav-item">
                                <span className="nav-link">Welcome {user}!</span>
                            </li>
                        )}
                        {!isLoggedIn && (
                          <li className="nav-item">
                              <Link className="nav-link" to="/login">Login</Link>
                          </li>
                        )}
                        {!isLoggedIn && (
                          <li className="nav-item">
                              <Link className="nav-link" to="/register">Register</Link>
                          </li>
                        )}
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/donations">Donations</Link>
                        </li>
                    </ul>
                </div>
                {isLoggedIn && (
                    <div>
                        <button onClick={handleLogout} className="btn btn-outline-dark">Logout</button>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
