import React from 'react';
import './App.css';
import AuthenticationModal from './components/authenticationModal';
import ShoppingForm from './components/shoppingForm';
import MainPage from './components/mainPage/mainPage';

function App() {
  return (
      <div className="App">
          {/* Changed */}
          {/*<header className="App-header">*/}
          {/*    Dunkees*/}
          {/*</header>*/}
          {/*<AuthenticationModal></AuthenticationModal>*/}
          {/*<ShoppingForm></ShoppingForm>*/}
          <MainPage></MainPage>
      </div>
  );
}

export default App;
