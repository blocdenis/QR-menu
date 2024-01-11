import React from 'react'
import '../css/scss/btn-system.scss';
import { Button } from 'primereact/button';

function ButtonSystem() {
  return (
    <div className='block-btn-system'>
    <Button className='btn-back' type='back' value="Back">Back</Button>
    <Button className='btn-save'severity="success" type='save' value="Save">Save</Button>
    </div>
  )
}

export default ButtonSystem
