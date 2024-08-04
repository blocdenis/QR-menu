import { Link } from 'react-router-dom';
import styles from './Home.module.scss';
import Header from '../../components/Header/Header.jsx';
import IconMenu from '../../SVG/IconMenu.jsx';
import IconSetting from '../../SVG/IconSetting.jsx';
import IconTable from '../../SVG/IconTable.jsx';
import { SupportIcon } from '../../assets/SupportIcon.jsx';
import LogoImg from '../../components/LogoImg/LogoImg.jsx';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import checkToken from '../../Fetch/func/CheckToken.js';
const Home = () => {
  const navigate = useNavigate();

  // let restaurantLogo;
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

        <div className={styles.home_logo}>
          <LogoImg  /> 
        </div>
        <Link to={'/tables'} style={{ textDecoration: 'none' }}>

          <button className={styles.button_page}>
            <div className={styles.home_vector}>
              <IconTable/>
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

        <Link to={'/support'} style={{ textDecoration: 'none' }}>
          <button className={styles.button_page}>
            <div className={styles.home_vector} style={{color: 'white'}}>
              <SupportIcon />
            </div>
            Support
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
