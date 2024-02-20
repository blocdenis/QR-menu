import { Link} from 'react-router-dom';
import '../css/scss/button.scss'
import '../css/home.scss'
import Header from '../components/Header/Header.jsx';
import IconMenu from "../SVG/IconMenu.jsx";
import IconSetting from '../SVG/IconSetting.jsx';
import IconTable from '../SVG/IconTable.jsx';
import { useRef } from 'react';

const Home = () => {
  const fileInputRef = useRef(null);

  const handleClick = (event) => {
    event.preventDefault(); // Запобігаємо перевантаженню сторінки

    const fileInput = fileInputRef.current;
    if (!fileInput) return; // Перевірка на наявність елемента

    fileInput.click(); // Відкриваємо діалогове вікно вибору файлу
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) return; // Перевірка на наявність файлу

    const reader = new FileReader();
    reader.onload = () => {
      // Зробити щось із завантаженим зображенням (зберегти в базу даних, відобразити на сторінці тощо)
      console.log('Завантажено:', reader.result); // Приклад виводу файлу в консоль
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className='home-page'>
          <Header/>
    <div className='home-wrap'>
        <div className='home-title'>
            <h1>Welcome</h1>
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
