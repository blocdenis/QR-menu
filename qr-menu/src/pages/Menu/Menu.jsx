import React from 'react';
import NavbarSystem from '../../components/NavBar/NavbarSystem.jsx';
import HeaderSystem from '../../components/Header/HeaderSystem.jsx';
import Button from '../../components/Button/Button.jsx';
import styles from './Menu.module.scss';

const Menu = () => {
  return (
    <>
      <div className={styles.container_wrap}>
        <HeaderSystem />
        <div className={styles.container_page}>
          <div className={styles.page_left}>
            <NavbarSystem />
          </div>
          <div className={styles.page_right}>
            <div className={styles.block_title}>
              <h1 className={styles.page_title}>Menu</h1>
              <div>
                <Button variant="custom">Back</Button>
                <Button>Save</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
