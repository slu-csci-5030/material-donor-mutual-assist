// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import LoginPage from './components/LoginPage';

const App = () => {
  return (
    <Router>
      <Routes>  {/* Change 'Switch' to 'Routes' */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/loginPage" element={<LoginPage />} />
        
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
