import Menu from "./Menu";
import Table from "./Table";
import Settings from "./Settings";
import { Link} from 'react-router-dom';
import '../css/scss/button.scss'
import '../css/home.scss'
import Header from '../components/Header';

const Home = () => {
  return (
    <div className='home-wrap'>
    <Header/>
    <h1>Welcome</h1>
    <h3>to your restourant account </h3>
      <button className='circle-page'>Your Logo</button>
      <Link to={'/table'}> <button className='button-page'>Table</button></Link>
      <Link to={'/menu'}> <button  className='button-page'>Menu</button></Link>
      <Link to={'/settings'}> <button  className='button-page'>Settings</button></Link>
    </div>
  );
};

export default Home;
