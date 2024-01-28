import React from 'react';
import NavbarSystem from '../components/NavBar/NavbarSystem.jsx';
import HeaderSystem from '../components/Header/HeaderSystem.jsx';
import '../css/scss/menu.scss';
import '../css/scss/wrapPage.scss';
import ButtonSystem from '../components/Button/ButtonSystem.jsx';

const Menu = () => {
  return (<>
 
    <div className='container-wrap'>
    <HeaderSystem/>
    <div className='container-page'>
  <div className='page-left'>
    <NavbarSystem/>
  </div>
    <div className='page-right'>
    <div className='block-title'>
      <h1 className='page-title'>Menu</h1>
        <div >
          <ButtonSystem/> 
        </div>
    </div> 
    </div>
</div>      
    </div>
  </>
   
  );
};

export default Menu;
