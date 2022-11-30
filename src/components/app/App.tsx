import React from 'react';
import logo from '../../assets/images/logo.svg';
import './App.css';

function App(): JSX.Element {
  return (
    <div className="text-center">
      <header className="min-h-screen flex flex-col items-center justify-center text-white bg-coolGray-800 text-3xl">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Go</p>
      </header>
    </div>
  );
}

export default App;
