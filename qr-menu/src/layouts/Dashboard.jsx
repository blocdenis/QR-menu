import { Link, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { useURL } from '../hooks/useURL';

const Dashboard = () => {
  const url = useURL();
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
        <h1>QR-MENU</h1>
        <nav
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '30px',
          }}
        >
          <Link to={url.Home.path}>Home</Link>
          <Link to={url.ModMenu.path}> Mod menu</Link>
          <Link to={url.Menu.path}> Menu</Link>
        </nav>
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
