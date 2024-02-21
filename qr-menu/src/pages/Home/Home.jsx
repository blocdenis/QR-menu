import { Link } from 'react-router-dom';
import styles from './Home.module.scss'
import Header from '../../components/Header/Header.jsx';
import IconMenu from '../../SVG/IconMenu.jsx';
import IconSetting from '../../SVG/IconSetting.jsx';
import IconTable from '../../SVG/IconTable.jsx';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import checkToken from '../../Fetch/func/CheckToken.js';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    checkToken(navigate);
  }, [navigate]);

  return (
    <div className={styles.home_page}>
      <Header />
      <div className={styles.home_wrap}>
        <div className={styles.home_title}>
          <h1>Welcome</h1>
          <h3>to your restourant account </h3>
        </div>
        <button
          className={styles.home_logo}
          // onClick={() => window.open("file:///", "")}
        >
          Your Logo
        </button>
        <Link to={'/table'} style={{ textDecoration: 'none' }}>
          <button className={styles.button_page}>
            <div className={styles.home_vector}>
              <IconTable />
            </div>
            Table
          </button>
        </Link>

        <Link to={'/menu'} style={{ textDecoration: 'none' }}>
          <button className={styles.button_page}>
            <div className={styles.home_vector}>
              <IconMenu />
            </div>
            Menu
          </button>
        </Link>

        <Link to={'/settings'} style={{ textDecoration: 'none' }}>
          <button className={styles.button_page}>
            <div className={styles.home_vector}>
              <IconSetting />
            </div>
            Settings
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
