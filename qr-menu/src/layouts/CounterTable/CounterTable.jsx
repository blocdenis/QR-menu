import React from 'react';
import { useCounter } from 'primereact/hooks';
import { Button } from 'primereact/button';

function CounterTable({ value, onChange }) {
  const { count, increment, decrement } = useCounter(0);
  const handleIncrement = () => {
    onChange(value + 1);
  };

  const handleDecrement = () => {
    onChange(Math.max(0, value - 1));
  };
  return (
    <div className="card flex flex-column align-items-center">
      <div className="flex flex-wrap gap-3">
        <button onClick={handleDecrement}>-</button>
        <span>{value}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
}

export default CounterTable;
