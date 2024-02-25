import React, { useState } from 'react';
import DonationForm from '/Users/brijithatialu/IdeaProjects/material-donor-mutual-assist/client-app/src/DonationForm.js';
import LoginForm from '/Users/brijithatialu/IdeaProjects/material-donor-mutual-assist/client-app/src/LoginForm.js';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle successful login
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      {/* Conditional rendering based on login state */}
      {isLoggedIn ? (
        // If user is logged in, render the DonationForm
        <DonationForm />
      ) : (
        // If user is not logged in, render the LoginForm
        <LoginForm onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
}

export default App;
