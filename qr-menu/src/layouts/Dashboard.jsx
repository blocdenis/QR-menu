import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import '../css/scss/dashboard.scss'
import Header from '../components/Header';

import Navigation from '../components/Navigation';
const Dashboard = () => {

  return (
    <div className='dashboard-style'>
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
