import React, { Children } from 'react';
import HeaderSystem from '../../components/Header/HeaderSystem';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import './AppLayout.scss';
import { useLocation } from 'react-router-dom';

export const AppLayout = ({ children, restaurantLogo }) => {
  const location = useLocation();
  if (location.pathname !== '/') {
    const styles = { justifyContent: 'center' };
    return (
      <div>
        <div className="header">
          <HeaderSystem />
        </div>
        <div className="applayout_container">
          <Sidebar restaurantLogo={restaurantLogo} />
          <main style={styles}>{children}</main>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="header">
          <HeaderSystem />
        </div>
        <div className="applayout_container">
          <Sidebar />
          <main className="main_container">{children}</main>
        </div>
      </div>
    );
  }
};
