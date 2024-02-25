import React, { useState } from 'react';

const Register = () => {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/api/auth/register", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password })
            });
            const json = await response.json();
            console.log(json);
            if (json.success) {
                localStorage.setItem('token', json.authtoken);
                window.location.href = '/about';
            } else {
                alert(json.error || "Registration failed. Please try again.");
            }
        } catch (error) {
            console.error("Error during registration:", error);
            alert("An error occurred during registration. Please try again.");
        }
    };

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className='my-5 container'>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" value={credentials.name} onChange={onChange} id="name" name="name" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
    );
};

export default Register;
