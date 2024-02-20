import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header.jsx';
import IconMenu from '../../SVG/IconMenu.jsx';
import IconSetting from '../../SVG/IconSetting.jsx';
import IconTable from '../../SVG/IconTable.jsx';
import styles from './Home.module.scss';
import { useRef } from 'react';
const Home = () => {
  const fileInputRef = useRef(null);

  const handleClick = (event) => {
    event.preventDefault();
    const fileInput = fileInputRef.current;
    if (!fileInput) return;

    fileInput.click(); 
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) return; 

    const reader = new FileReader();
    reader.onload = () => {
      console.log('Завантажено:', reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className={styles.home_page}>
      <Header />
      <div className={styles.home_wrap}>
        <div className={styles.home_title}>
          <h1>Hi</h1>
          <h3>to your restourant account </h3>
        </div>
          <a href="#" className='home-logo' onClick={handleClick}>
            <img src="image.png" alt="Your logo"/>
          </a>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              ref={fileInputRef}
              style={{ display: 'none' }}
            />
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
