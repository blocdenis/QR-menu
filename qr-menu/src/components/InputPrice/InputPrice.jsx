import  {useState} from 'react'
import './InputPrice.scss';
function InputPrice() {
  const [price, setPrice] = useState('');
  const [currency, setCurrency] = useState('UAH');

  const handlePriceChange = event => {
    const newPrice = event.target.value.replace(/[^0-9.]/g, '');
    setPrice(newPrice);
  };

  const handleCurrencyChange = event => {
    setCurrency(event.target.value);
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
        return '';
    }
  };

  return (
    <div>
      <div >
          <input
            id="price"
            className="input-price style-input"
            type="number"
            name="price"
            step="1"
            min="0"
            value={price}
            onChange={handlePriceChange}
            placeholder="Enter price"
          />
          <div className='currency-symbol '>
          <span className="sumbol-style ">{getCurrencySymbol()}</span>
          <select className="style-input" value={currency} onChange={handleCurrencyChange}>
            <option value="UAH">UAH</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>
          </div>
        </div>
    </div>
  )
}

export default InputPrice
