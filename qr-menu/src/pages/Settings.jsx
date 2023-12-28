import React from 'react'
import NavbarSystem from '../components/NavbarSystem';
import HeaderSystem from '../components/HeaderSystem';
import '../css/scss/setting.scss';

import ButtonSystem from '../components/ButtonSystem';

function Setting() {
  return (
    <div className='seting-wrap'>
        <HeaderSystem/>
          <div className='tables-page'>
            <div className='page-left'>
              <NavbarSystem/>
            </div>
              <div className='page-right'>
              <div className='block-title'>
                <h1 className='page-title'>Settings</h1>
                  <div >
                    <ButtonSystem/> 
                  </div>
              </div> 
              </div>
          </div>      
    </div>
  )
}

export default Setting
