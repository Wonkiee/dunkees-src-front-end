import React, { useState } from 'react';
import { BrowserRouter as Router, Switch ,Route } from 'react-router-dom';
import './App.css';

import AuthenticationModal from './components/authenticationModal';
import ShoppingFlow from './components/shoppingFlow';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
      <Router>
          <Switch>
              <Route exact path = "/" component  = { AuthenticationModal } />
              <PrivateRoute path = "/home" component= { ShoppingFlow } />
          </Switch>
      </Router>
  );
}

export default App;
