import React from 'react';
import './App.css';
import AuthenticationModal from './components/authenticationModal';

function App() {
  return (
      <div className="App">
          <header className="App-header">
              Dunkees
          </header>
          <AuthenticationModal></AuthenticationModal>
      </div>
  );
}

export default App;
