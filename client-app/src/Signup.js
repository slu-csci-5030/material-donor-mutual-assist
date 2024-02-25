import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import SignupImage from './images/samsung-uk-n2FLiPRGaxk-unsplash.jpg';
import './Signup.css';

function Signup() {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({
        email: '',      
        password: '',
        profile_name: '',
        confirmPassword: '' 
    });
    const [passwordError, setPasswordError] = useState('');
    const [feedbackMessage, setFeedbackMessage] = useState({ message: '', isError: false });
    // State to toggle password visibility
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({
            ...userInfo,
            [name]: value
        });

        if (name === 'confirmPassword' || name === 'password') {
            setPasswordError('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userInfo.password !== userInfo.confirmPassword) {
            setPasswordError('Passwords do not match');
            return;
        }
        setPasswordError('');

        const payload = {
            email: userInfo.email,
            password: userInfo.password,
            profile_name: userInfo.profile_name
        };
    
        fetch('http://localhost:9111/register', {
            method: 'POST',
            origin: 'http://localhost:3000/',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })
        .then((response) => {
            if (response.ok) {
                setFeedbackMessage({ message: 'Donor Registered Successfully.', isError: false });
                navigate('/');
            } else {
                setFeedbackMessage({ message: 'Already Donor Exists!', isError: true });
            }
        })
        .catch((error) => {
            console.error(error);
            setFeedbackMessage({ message: 'An error occurred. Please try again.', isError: true });
        });
    };

    return (
        <div className="container">
          <div className="image-section">
            <img src={SignupImage} alt="Signup Image" />
          </div>
          <div className="form-section color-section">
            <h1 data-testid='signup-header'>Signup Donor!</h1>
            <form onSubmit={handleSubmit}>
              <input type="text" name="profile_name" placeholder="Full Name" onChange={handleInputChange} />
              <input type="text" name="email" placeholder="Enter Email" onChange={handleInputChange} />
              <div className="password-input-container">
                <input 
                  type={showPassword ? "text" : "password"}
                  name="password" 
                  placeholder="Password" 
                  onChange={handleInputChange} 
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              <div className="password-input-container">
                <input 
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword" 
                  placeholder="Retype Password" 
                  onChange={handleInputChange} 
                />
                <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                  {showConfirmPassword ? "Hide" : "Show"}
                </button>
              </div>
              {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
              <button type="submit" data-testid='signup-button'>Sign Up</button>
              {feedbackMessage.message && (
                <p style={{ color: feedbackMessage.isError ? 'red' : 'green' }}>{feedbackMessage.message}</p>
              )}
              <div className="signup-text">
                Already have an account? <Link to="/">Login</Link>
              </div>
            </form>
          </div>
        </div>
    );
}

export default Signup;
