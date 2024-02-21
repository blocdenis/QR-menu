import React from 'react';
// import '../../css/scss/headerSystem.scss';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

function HeaderSystem() {
  return (
    <div className={styles.headsystem}>
      <div>
        <h3 className={styles.header_title}>Name of the restaurant</h3>
      </div>

      <div className={styles.header_link_logout}>
        <Link to={'/'} className={styles.header_link}>
          <span className={styles.header_logout}>Log out</span>
        </Link>
      </div>
    </div>
  );
}

export default HeaderSystem;
