import React from 'react';
import './BtnAllIngred.scss';
import Button from '../../components/Button/Button.jsx';

function BtnAllIngred({ handleApply, handleCancel }) {
  return (
    <div className="block-btn">
      <Button className="btn-backmenu" onClick={handleCancel} variant="custom">
        Cancel
      </Button>
      <Button className="btn-savemenu" onClick={handleApply}>
        Apply
      </Button>
    </div>
  );
}

export default BtnAllIngred;
