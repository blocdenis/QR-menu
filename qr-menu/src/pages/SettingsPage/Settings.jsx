import React from 'react';
import NavbarSystem from '../../components/NavBar/NavbarSystem';
import HeaderSystem from '../../components/Header/HeaderSystem';
import styles from './Settings.module.scss';

import Button from '../../components/Button/Button';
import { AppLayout } from '../../layouts/AppLayout/AppLayout';
import PasswordInput from '../../components/Input/PasswordInput';

function Setting() {
  return (
    <AppLayout>
      <div >
       <div><h1 className={ styles.pageTitle}>Settings</h1></div> 
    <div id='signIn'>
     <div className="sign-into-container">
       <div className="sign-into-inputs">
        <PasswordInput />
       </div>
       </div>
       </div>
        <div>
          <Button variant="custom">Back</Button>
          <Button>Save</Button>
        </div> 
      </div>
  
    </AppLayout>
  );
}

export default Setting;
