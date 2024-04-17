import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/RegisterPage.css'; // Assuming this CSS is styled properly for login as well

const LoginPage = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [captcha, setCaptcha] = useState('');
    const [captchaValue, setCaptchaValue] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleCaptchaChange = (e) => {
        setCaptchaValue(e.target.value);
    };

    const generateCaptcha = () => {
        // Implement captcha generation logic
        setCaptcha('ABC123'); // Placeholder captcha
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        if (captcha !== captchaValue) {
            setErrorMessage('Incorrect CAPTCHA. Please try again.');
            generateCaptcha();
            return;
        }
        console.log(credentials);
        // Perform authentication and redirect or show error message
    };

    return (
        <div className="register-container">
            <h2>Donor Tracking System</h2>
            <h2>Login</h2>
            <form onSubmit={handleSubmit} className="auth-form">
                <div className="form-group">
                    <input
                        type="text"
                        name="username" 
                        placeholder="Username or Email"
                        value={credentials.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={credentials.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="captcha">CAPTCHA: {captcha}</label>
                    <input
                        type="text"
                        id="captcha"
                        name="captcha"
                        value={captchaValue}
                        onChange={handleCaptchaChange}
                        required
                    />
                </div>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <div className="auth-actions">
                    <button type="submit" className="auth-button">Login</button>
                    <Link to="/forgot-password" className="auth-link">Forgot Password?</Link>
                    <button type="button" onClick={generateCaptcha} className="auth-button secondary">Refresh CAPTCHA</button>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;
