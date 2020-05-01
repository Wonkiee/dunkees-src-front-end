import React, { useState } from 'react';
import { BrowserRouter as Router, Switch ,Route } from 'react-router-dom';
import './App.css';

import AuthenticationModal from './components/authenticationModal';
import PrivateRoute from './components/PrivateRoute';
import MainPage from './components/mainPage/mainPage';

function App() {
  return (
      <Router>
          <Switch>
              <Route exact path = "/" component  = { AuthenticationModal } />
              <PrivateRoute path = "/home" component= { MainPage } />
          </Switch>
      </Router>
  );
}

export default App;
