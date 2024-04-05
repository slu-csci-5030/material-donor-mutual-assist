import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const [captcha, setCaptcha] = useState("");
    const [captchaValue, setCaptchaValue] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const generateCaptcha = () => {
        const randomCaptcha = Math.random().toString(36).substring(7);
        setCaptcha(randomCaptcha);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate CAPTCHA
        if (captchaValue.toLowerCase() !== captcha.toLowerCase()) {
            setErrorMessage("Incorrect CAPTCHA. Please try again.");
            return;
        }

        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json();

        if (json.success) {
            localStorage.setItem('token', json.authtoken);

            // Retrieve user's name from the response and store it in localStorage
            localStorage.setItem('username', json.user.name);

            // Redirect to the Dashboard page
            window.location.href = '/dashboard';
        } else {
            setErrorMessage("Invalid credentials");
        }
    };

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleCaptchaChange = (e) => {
        setCaptchaValue(e.target.value);
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit} className='my-5'>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="captcha" className="form-label">CAPTCHA: {captcha}</label>
                            <input type="text" className="form-control" value={captchaValue} onChange={handleCaptchaChange} id="captcha" name="captcha" />
                        </div>
                        {errorMessage && <div className="alert alert-danger" role="alert">{errorMessage}</div>}

                        <button type="submit" className="btn btn-primary" disabled={!captchaValue}>Submit</button>
                        <Link to="/forgot-password" className="btn btn-link">Forgot Password?</Link> {/* Link to Forgot Password page */}
                        <button type="button" className="btn btn-secondary" onClick={generateCaptcha}>Refresh CAPTCHA</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
