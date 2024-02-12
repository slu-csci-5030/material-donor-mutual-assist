import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Navbar from './Components/Navbar';
import Login from './Components/Login'; 
import Register from './Components/Register';
import About from './Components/About';


const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes> {/* Wrap your Route components inside Routes */}
          <Route path="/login" element={<Login />} /> {/* Use element prop to render components */}
          <Route path="/register" element={<Register />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
