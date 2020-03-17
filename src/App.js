import React, { useEffect } from 'react';
import './App.css';
import CurrencyRow from './Components/Currency';
import Header from './Components/Header';

const BASE_URL = 'https://api.exchangeratesapi.io/latest';

function App() {

  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => console.log(data))
  })

  return (
    <div className="App">
      <Header />
      <CurrencyRow />
      <div className="equals">=</div>
      <CurrencyRow />
    </div>
  );
}

export default App;
