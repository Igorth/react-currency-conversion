import React from 'react';
import './styles.css';

export default function CurrencyRow(props) {
  const { currencyOptions } = props
  return (
    <div>
      <input type="number" className="input" id=""/>
      <select name="" id="">
        {currencyOptions.map( option => (
          <option value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}
