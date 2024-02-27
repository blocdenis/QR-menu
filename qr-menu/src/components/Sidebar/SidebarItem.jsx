import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.scss';
export const SidebarItem = ({ icon, path, children }) => {
  return (
    <div className="sidebaritem">
      <Link to={path}>
        {/* {icon && <div>{icon}</div>}
        {children} */}
        <div>{icon}</div>
        <div className="content">{children}</div>
      </Link>
    </div>
  );
};
