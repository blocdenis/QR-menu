import { useState } from 'react';
import './InputWeight.scss';

function InputWeight({ onChange, id, value }) {
  const [weightMenu, setWeightMenu] = useState(0);

  const increment = () => {
    setWeightMenu(weightMenu + 1);
  };

  const decrement = () => {
    setWeightMenu(weightMenu - 1);
  };

  return (
    <div>
      <div className="div-weight">
        <button className="btn-decrement" onClick={decrement}>
          -
        </button>
        <span id={id} value={value} onChange={onChange} className="span-style">
          {weightMenu}
        </span>
        <button className="btn-increment" onClick={increment}>
          +
        </button>
      </div>

      <p className="text-weight">Select a weight in gram</p>
    </div>
  );
}

export default InputWeight;
