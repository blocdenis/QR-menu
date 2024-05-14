import { useState, useEffect } from 'react';
import './InputPrice.scss';
function InputPrice({ onChange, value }) {
  const [price, setPrice] = useState('');
  const [currency, setCurrency] = useState('');
  useEffect(() => {
    setPrice(value.price || '');
    setCurrency(value.currency || '');
  }, [value]);
  const handlePriceChange = event => {
    const newValue = event.target.value;
    setPrice(newValue);
    onChange({ price: newValue, currency });
    console.log(price)
  };

  const handleCurrencyChange = event => {
    const newValue = event.target.value;
    setCurrency(newValue);
    onChange({ price, currency: newValue });
  };
  const getCurrencySymbol = () => {
    switch (currency) {
      case 'UAH':
        return '₴';
      case 'USD':
        return '$';
      case 'EUR':
        return '€';
      default:
        return '₴';
    }
  };

  return (
    <div>
      <div>
        <input
          id="id"
          className="input-price style-input"
          type="number"
          name="price"
          step="1"
          min="0"
          value={price}
          onChange={handlePriceChange}
          placeholder="Enter price"
        />
        <div className="currency-symbol ">
          <span className="sumbol-style ">{getCurrencySymbol()}</span>
          <select
            id='id'
            className="style-input color-currency"
            type="text"
            value={currency}
            onChange={handleCurrencyChange}
          >
            <option value="UAH">UAH</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default InputPrice;
