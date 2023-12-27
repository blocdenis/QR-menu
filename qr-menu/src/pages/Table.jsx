import React from 'react';
import '../css/scss/table.scss';
import NavbarSystem from '../components/NavbarSystem';
import HeaderSystem from '../components/HeaderSystem';

function Table() {
  return (
    <div className='table-wrap'>
      <HeaderSystem/>
      <NavbarSystem/>
    </div>
  )
}

export default Table
