import { useState } from 'react';
import './InputCategor.scss';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function InputCategor({ value, onChange, id }) {
  //const navigate = useNavigate();

  // const [selectedOption, setSelectedOption] = useState('');
  const [options, setOptions] = useState([
    { value: 'meat', label: 'Meat' },
    { value: 'fish', label: 'Fish' },
    { value: 'salad', label: 'Salad' },
    { value: 'others', label: 'Others' },
  ]);

  // const handleChange = e => {
  //   const value = e.target.value;
  //   setSelectedOption(value);
  //   if (value === 'other') {
  //     navigate('/addcategory');
  //   }

  // };
  return (
    <div className='categor-container'>
        <select
          className="select-categ style-input"
          id={id}
          name='categories'
          value={value}
          onChange={onChange}
        >
          {options && options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
          {/* <option value="othercategor">Other</option> */}
        </select>
      
    </div>
  );
}

export default InputCategor;
