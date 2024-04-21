import React from 'react'
import './BtnAllIngred.scss';
import Button from '../../components/Button/Button.jsx';

function BtnAllIngred({handleSubmit, closeIngredModal}) {
  
  return (
    <div className="block-btn">
      <Button className="btn-backmenu" onClick={closeIngredModal} variant="custom">
        Cancel
      </Button>
      <Button className="btn-savemenu" onClick={handleSubmit}>
        Apply
      </Button>
    </div>
  )
}

export default BtnAllIngred
