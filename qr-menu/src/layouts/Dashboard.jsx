import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import Header from '../components/Header';
import Navigation from '../components/Navigation';
const Dashboard = () => {

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        height: '100%',
      }}
    >
      <header>
      {/* <Header/>
       <Navigation/> */}
      </header>
      <main style={{ flex: 1 }}>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
      <footer>contact place</footer>
    </div>
  );
};
export default Dashboard;
