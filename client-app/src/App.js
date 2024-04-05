// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Login from './Components/Login'; 
import Register from './Components/Register';
import Home from './Components/Home';
import ForgotPassword from './Components/ForgotPassword';
import ResetPasswordPage from './Components/ResetPasswordPage';
import StatusDisplayPage from './Components/StatusDisplayPage';
import AdminHeader from './Components/AdminHeader';
import DonatedItemsList from './Components/DonatedItemsList';
import SearchFilter from './Components/searchFilter'; 

const App = () => {
  const [searchResults, setSearchResults] = useState([]); // Stating store search results

  const handleSearch = async (searchParams) => {
    try {
      // Making an HTTP request to your backend API
      const response = await fetch(`/api/search?${new URLSearchParams(searchParams)}`);
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />}/>
          <Route path="/about" element={<Home />}/>
          <Route path="/forgot-password" element={<ForgotPassword/>}/>
          <Route path='/resetpassword' element={<ResetPasswordPage/>}/>
          <Route path="/item/:itemId" element={<StatusDisplayPage />} />
          <Route path="/donations" element={
            <>
              <AdminHeader />
              <SearchFilter onSearch={handleSearch} /> 
              <DonatedItemsList />
            </>
          } />
        </Routes>

        {/* Display search results */}
        <ul>
          {searchResults.map((result) => (
            <li key={result.id}>
              Donor: {result.donorName}, Type: {result.objectType}, Date: {result.date}
            </li>
          ))}
        </ul>
      </div>
    </Router>
  );
}

export default App;
