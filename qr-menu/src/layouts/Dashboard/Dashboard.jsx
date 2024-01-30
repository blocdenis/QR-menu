import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import styles from './Dashboard.module.scss';
import Header from '../../components/Header/Header.jsx';

import Navigation from '../Navigation/Navigation.jsx';
const Dashboard = () => {
  return (
    <div className={styles.dashboard_style}>
      <header>
        {/* <Header/> */}
        {/* <Navigation/>  */}
      </header>
      <main style={{ flex: 1 }}>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
      <footer>Hello colleagues! Let's get to work!</footer>
    </div>
  );
};
export default Dashboard;
