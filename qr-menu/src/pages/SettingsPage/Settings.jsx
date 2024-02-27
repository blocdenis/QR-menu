import React from 'react';
import NavbarSystem from '../../components/NavBar/NavbarSystem';
import HeaderSystem from '../../components/Header/HeaderSystem';
import './Settings.scss';

import Button from '../../components/Button/Button';
import { AppLayout } from '../../layouts/AppLayout/AppLayout';

function Setting() {
  return (
    <AppLayout>
      <div className="block-title">
        <h1 className="page-title">Settings</h1>

        <div>
          <Button variant="custom">Back</Button>
          <Button>Save</Button>
        </div>
      </div>
    </AppLayout>
  );
}

export default Setting;
