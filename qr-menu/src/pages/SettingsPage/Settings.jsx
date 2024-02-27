import React from 'react';
import NavbarSystem from '../../components/NavBar/NavbarSystem';
import HeaderSystem from '../../components/Header/HeaderSystem';
import './Settings.scss';

import Button from '../../components/Button/Button';

function Setting() {
  return (
    <div className="container-wrap">
      <HeaderSystem />
      <div className="container-page">
        <div className="page-left">
          <NavbarSystem />
        </div>
        <div className="page-right">
          <div className="block-title">
            <h1 className="page-title">Settings</h1>
            <div>
              <Button variant="custom">Back</Button>
              <Button>Save</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Setting;
