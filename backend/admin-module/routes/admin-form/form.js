import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegistrationPage from './RegistrationPage';
import DonationFormPage from './DonationFormPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={RegistrationPage} />
          <Route path="/donation-form" component={DonationFormPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
