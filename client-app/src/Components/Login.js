import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = (props) => {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const [captcha, setCaptcha] = useState("");
    const [captchaValue, setCaptchaValue] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [invalidCaptchaCount, setInvalidCaptchaCount] = useState(0); // New state variable
    const [isButtonDisabled, setIsButtonDisabled] = useState(false); // New state variable

    const generateCaptcha = () => {
        const randomCaptcha = Math.random().toString(36).substring(7);
        setCaptcha(randomCaptcha);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate CAPTCHA
        if (captchaValue.toLowerCase() !== captcha.toLowerCase()) {
            setErrorMessage("Incorrect Credentials. Please try again.");
            setInvalidCaptchaCount(invalidCaptchaCount + 1); // Increase invalid captcha count

            // If invalid captcha count reaches 5, disable the button for a specific time
            if (invalidCaptchaCount >= 4) {
                setIsButtonDisabled(true);
                setTimeout(() => {
                    setIsButtonDisabled(false);
                    setInvalidCaptchaCount(0); 
                    setErrorMessage("Login disabled due to multiple failed attempts. Please try again Later.");
                }, 30000);
            }
            return;
        }

        // const response = await fetch("http://localhost:5000/api/auth/login", {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({ email: credentials.email, password: credentials.password })
        // });
        // const json = await response.json();

        // if (json.success) {
        //     localStorage.setItem('token', json.authtoken);
        //     localStorage.setItem('name', json.name);
            window.location.href = '/About';
        // } else {
        //     setErrorMessage("Invalid credentials");
        // }
        alert("Login Success");
    };

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleCaptchaChange = (e) => {
        setCaptchaValue(e.target.value);
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className='my-5 container'>
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

                <button type="submit" className="btn btn-primary" disabled={!captchaValue || isButtonDisabled}>Submit</button> {/* Disable button if captcha is not entered or if button is disabled */}
            <Link to="/forgot-password" className="btn btn-link">Forgot Password?</Link> {/* Link to Forgot Password page */}
            <button type="button" className="btn btn-secondary" onClick={generateCaptcha}>Refresh CAPTCHA</button>
            </form>
        </div>
    );
};

export default Login;
