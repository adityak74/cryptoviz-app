import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import MainLayout from './components/Layout';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
      </header> */}
      <MainLayout />
    </div>
  );
}

export default App;
