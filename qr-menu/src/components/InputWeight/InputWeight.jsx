import { useState } from 'react';
import './InputWeight.scss';

function InputWeight({ onChange, id, value }) {
  const [weightMenu, setWeightMenu] = useState(10);

  const increment = () => {
    setWeightMenu(weightMenu + 10);
    onChange({ target: { value: weightMenu + 10 } });
  };

  const decrement = () => {
    setWeightMenu(weightMenu - 10);
    onChange({ target: { value: weightMenu - 10 } });
  };

  return (
    <div>
      <div className="div-weight">
        <button className="btn-decrement" onClick={decrement} type="button">
          -
        </button>
        <span id={id} value={value} onChange={onChange} className="span-style">
          {weightMenu}
        </span>
        <button className="btn-increment" onClick={increment} type="button">
          +
        </button>
      </div>

      <p className="text-weight">Select a weight in gram</p>
    </div>
  );
}

export default InputWeight;
