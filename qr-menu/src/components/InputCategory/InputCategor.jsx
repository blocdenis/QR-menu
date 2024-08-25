import { useState } from 'react';
import './InputCategor.scss';


// eslint-disable-next-line react/prop-types
function InputCategor({ id, type, value, onChange, options }) {

  console.log(options);
  
  return (
    <div className='categor-container'>
      <select
        className="select-categ style-input"
        id={id}
        name='categories'
        value={value}
        type={type}
        onChange={onChange}
      >
        {options && options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label} {/* Отображение названия категории */}
          </option>
        ))}
      </select>
    </div>
  );
}

export default InputCategor;