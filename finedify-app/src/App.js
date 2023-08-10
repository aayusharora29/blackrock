import logo from './logo.svg';
import './App.css';
import React from 'react';
import MainHomepage from './components/homepage/homepage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <MainHomepage />

        <h1>Finedify App</h1>

        </>
      </header>
    </div>
  );
}

export default App;
