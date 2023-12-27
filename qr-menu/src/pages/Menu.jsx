import React from 'react';
import NavbarSystem from '../components/NavbarSystem';
import HeaderSystem from '../components/HeaderSystem';
import '../css/scss/menu.scss';

const Menu = () => {
  return (<>
 
    <div className='menu-wrap'>
    <HeaderSystem/>
    <NavbarSystem/>
    </div>
  </>
   
  );
};

export default Menu;
