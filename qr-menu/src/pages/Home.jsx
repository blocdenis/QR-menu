import Menu from "./Menu";
import Table from "./Table";
import Settings from "./Settings";
import { Link} from 'react-router-dom';
import '../css/scss/button.scss'
import '../css/home.scss'
import Header from '../components/Header';

const Home = () => {
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
          <Link to={'/table'}>
           <button className='button-page'>
           <img src='../assets/Vector(1).png' alt='card1'></img>
           Table</button>
           </Link>

          <Link to={'/menu'}>
           <button className='button-page'>
           <img src='../assets/Vector(2).png' alt='card2'></img>
           Menu</button>
           </Link>

          <Link to={'/settings'}>
           <button  className='button-page'>
           <img src='../assets/Group(1).png' alt='card3'></img>
           Settings</button>
           </Link>
    </div>
    </div>
  );
};

export default Home;
