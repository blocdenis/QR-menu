import React from 'react';
import HeaderSystem from '../components/HeaderSystem';
import '../css/scss/table.scss';
import NavbarSystem from '../components/NavbarSystem';

function Table() {
  return (
    <div className='table-wrap'>
      <HeaderSystem/>
      <NavbarSystem/>
    </div>
  )
}

export default Table
