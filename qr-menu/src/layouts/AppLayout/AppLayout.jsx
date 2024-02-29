import React, { Children } from 'react';
import HeaderSystem from '../../components/Header/HeaderSystem';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import './AppLayout.scss';
export const AppLayout = ({ children }) => {
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
};
