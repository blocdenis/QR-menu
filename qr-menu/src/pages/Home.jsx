import { Link} from 'react-router-dom';
import '../css/scss/button.scss'
import '../css/home.scss'
import Header from '../components/Header/Header.jsx';
import IconMenu from "../SVG/IconMenu.jsx";
import IconSetting from '../SVG/IconSetting.jsx';
import IconTable from '../SVG/IconTable.jsx';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import checkToken from "../Fetch/func/CheckToken.js"


const Home = () => {
  const navigate = useNavigate()

  useEffect(() => {
    checkToken(navigate)
  }, [navigate])

  return (
    <div className='home-page'>
          <Header/>
    <div className='home-wrap'>
        <div className='home-title'>
            <h1>Welcome</h1>
            <h3>to your restourant account </h3>
        </div>
          <button className='home-logo'
            // onClick={() => window.open("file:///", "")}
            >
            Your Logo</button>
          <Link to={'/table'} style={{ textDecoration: 'none'}}>
           <button className='button-page'>
           <div className='home-vector'>
           <IconTable />
           </div>
           Table</button>
           </Link>

          <Link to={'/menu'} style={{ textDecoration: 'none'}}>
           <button className='button-page'>
           <div className='home-vector'>
           <IconMenu />
          </div>
           Menu</button>
           </Link>

          <Link to={'/settings'} style={{ textDecoration: 'none'}}>
           <button className='button-page'>
           <div className='home-vector'>
           <IconSetting />
           </div>
           Settings</button>
           </Link>
    </div>
    </div>
  );
};

export default Home;
