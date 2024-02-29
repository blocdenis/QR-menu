import React from 'react';
import Button from '../../components/Button/Button.jsx';
import styles from './Menu.module.scss';
import { AppLayout } from '../../layouts/AppLayout/AppLayout.jsx';

const Menu = () => {
  return (
    <AppLayout>
      <div className={styles.block_title}>
        <h1 className={styles.page_title}>Menu</h1>
        <div>
          <Button variant="custom">Back</Button>
          <Button>Save</Button>
        </div>
      </div>
    </AppLayout>
  );
};

export default Menu;
