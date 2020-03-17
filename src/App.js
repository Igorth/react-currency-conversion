import React from 'react';
import './App.css';
import CurrencyRow from './CurrencyRow';

function App() {
  return (
    <div className="App">
      <h1>Currency Conversion</h1>
      <CurrencyRow />
      <div>=</div>
      <CurrencyRow />
    </div>
  );
}

export default App;
