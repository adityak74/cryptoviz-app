import React from 'react';
import MainLayout from './components/Layout';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <MainLayout {...props} />
    </div>
  );
}

export default App;
