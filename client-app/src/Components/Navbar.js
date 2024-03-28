import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import About from './Home';
import Donations from './DonatedItemsList';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState('');
    const [view, setView] = useState('home');

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
        setView('home');
    }

    return (
        <div className="">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src="/bworks.png" alt="Description of the image" style={{ width: '100px', height: '50px' }} />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {isLoggedIn && (
                                <li className="nav-item" style={{ fontSize: "20px", paddingLeft: "10px" }}>
                                    <span>Welcome {user}!</span>
                                </li>
                            )}
                            {!isLoggedIn && (
                                <li className="nav-item" style={{ fontSize: "20px", paddingLeft: "10px" }}>
                                    <h5 className="nav-link active" style={{cursor: 'pointer'}} aria-current="page" onClick={() => setView('login')}>Login</h5>
                                </li>
                            )}
                            {!isLoggedIn && (
                                <li className="nav-item" style={{ fontSize: "20px", paddingLeft: "10px" }}>
                                    <h5 className="nav-link active" aria-current="page" style={{cursor: 'pointer'}} onClick={() => setView('register')}>Register</h5>
                                </li>
                            )}
                            <li className="nav-item" style={{ fontSize: "20px", paddingLeft: "10px" }}>
                                <h5 className="nav-link" style={{cursor: 'pointer'}} onClick={() => setView('about')}>About</h5>
                            </li>
                            <li className="nav-item" style={{ fontSize: "20px", paddingLeft: "10px" }}>
                                <h5 className="nav-link" style={{cursor: 'pointer'}} onClick={() => setView('donations')}>Donations</h5>
                            </li>
                        </ul>
                        {isLoggedIn && (
                            <button onClick={handleLogout}>Logout</button>
                        )}
                    </div>
                </div>
            </nav>
            <div className="row justify-content-center">
                <div className="col-md-10">
                    {view === 'login' && <Login />}
                    {view === 'register' && <Register />}
                    {view === 'about' && <About />}
                    {view === 'donations' && <Donations />}
                    {/* Add other views as needed */}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
