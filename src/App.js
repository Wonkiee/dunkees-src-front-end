import React from 'react';
import './App.css';
import AuthenticationModal from './components/authenticationModal';
import ShoppingFlow from './components/shoppingFlow';
import DeliveryDetails from './components/deliveryDetails';

function App() {
  return (
      <div className="App">
          {/*<header className="App-header">*/}
          {/*    Dunkees*/}
          {/*</header>*/}
          {/*<AuthenticationModal></AuthenticationModal>*/}
          <DeliveryDetails></DeliveryDetails>
          <ShoppingFlow></ShoppingFlow>
      </div>
  );
}

export default App;
