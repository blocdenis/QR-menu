import { Link, Outlet } from 'react-router-dom';
import { useURL } from '../hooks/useURL';

function Navigation(){
    const url = useURL();
    return(
        <>
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

        </>
    )
}
export default Navigation;