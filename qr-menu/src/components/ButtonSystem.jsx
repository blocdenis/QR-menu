import React from 'react'
import '../css/scss/btn-system.scss';

function ButtonSystem() {
  return (
    <div className='block-btn-system'>
    <button className='btn-back' type='back' value="Back">Back</button>
      <button className='btn-save' type='save' value="Save">Save</button>
    </div>
  )
}

export default ButtonSystem
