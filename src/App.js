import React from 'react';
import './App.css';
import AuthenticationModal from './components/authenticationModal';
import ShoppingForm from './components/shoppingForm';

function App() {
  return (
      <div className="App">
          {/*<header className="App-header">*/}
          {/*    Dunkees*/}
          {/*</header>*/}
          <AuthenticationModal></AuthenticationModal>
          <ShoppingForm></ShoppingForm>
      </div>
  );
}

export default App;
