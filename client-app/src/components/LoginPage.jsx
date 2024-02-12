// // src/components/LoginPage.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  console.log('Rendering LoginPage component');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
    console.log('Logging in with:', email, password);
    // You can integrate with your backend authentication system
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-indigo-500">
      <div className="max-w-md w-full bg-white p-8 rounded-md shadow-md">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-4">Material Donor Login</h2>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button
              type="button" // Change type to "button" to prevent form submission
              className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
              onClick={handleLogin}
            >
              Sign in
            </button>
          </div>
        </form>
        <div className="text-sm text-center mt-4">
          Don't have an account?{' '}
          <Link to="/signup" className="font-medium text-blue-500 hover:text-blue-600">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
