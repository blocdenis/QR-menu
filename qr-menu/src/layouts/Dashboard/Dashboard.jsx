import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import styles from './Dashboard.module.scss';
import Header from '../../components/Header/Header.jsx';

import Navigation from '../Navigation/Navigation.jsx';
import HeaderSystem from '../../components/Header/HeaderSystem.jsx';
import { Sidebar } from '../../components/Sidebar/Sidebar.jsx';
const Dashboard = () => {
  return (
    <div className={styles.dashboard_style}>
      <Suspense>
        <Outlet />
      </Suspense>
      {/* <footer>Hello colleagues! Let's get to work!</footer> */}
    </div>
  );
};
export default Dashboard;
