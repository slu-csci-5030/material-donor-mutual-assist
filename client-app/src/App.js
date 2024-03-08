import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import StatusDisplayPage from './components/StatusDisplayPage';
import AdminHeader from './components/AdminHeader';
import DonatedItemsList from './components/DonatedItemsList';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/item/:itemId" element={<StatusDisplayPage />} />
        <Route path="/donations" element={<>
          <AdminHeader />
          <DonatedItemsList />
        </>} />
      </Routes>
    </Router>
  );
};

export default App;
