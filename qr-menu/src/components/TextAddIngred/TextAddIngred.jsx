import { useState } from 'react';

function TextAddIngred({onChange, value}) {
  return (
    <div>
      <textarea
       className='textarea'
        type="text"
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  );
}

export default TextAddIngred;
