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
           <div className='home-vector'>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
              <path d="M3.73002 14.616L5.07702 11.269C5.16302 11.0784 5.29235 10.9217 5.46502 10.799C5.63835 10.6764 5.83068 10.615 6.04202 10.615H8.50002V5.80203C6.21935 5.7567 4.30602 5.47137 2.76002 4.94603C1.21468 4.4207 0.442017 3.80403 0.442017 3.09603C0.442017 2.3347 1.26968 1.69237 2.92502 1.16903C4.58035 0.6457 6.60535 0.384033 9.00002 0.384033C11.3987 0.384033 13.4247 0.6457 15.078 1.16903C16.7313 1.69237 17.558 2.3347 17.558 3.09603C17.558 3.81603 16.782 4.43603 15.23 4.95603C13.678 5.4747 11.768 5.7567 9.50002 5.80203V10.615H11.958C12.1654 10.615 12.3567 10.6764 12.532 10.799C12.7067 10.9217 12.837 11.0784 12.923 11.269L14.269 14.615H13.231L12.031 11.615H5.96902L4.76902 14.615H3.73102L3.73002 14.616ZM9.00002 4.80703C10.796 4.80703 12.414 4.6397 13.854 4.30503C15.294 3.97037 16.174 3.56703 16.494 3.09503C16.174 2.62303 15.294 2.2197 13.854 1.88503C12.414 1.55037 10.796 1.38337 9.00002 1.38403C7.20402 1.38403 5.58602 1.55137 4.14602 1.88603C2.70602 2.2207 1.82602 2.62403 1.50602 3.09603C1.82602 3.56803 2.70602 3.97137 4.14602 4.30603C5.58602 4.6407 7.20402 4.80703 9.00002 4.80703Z" fill="white"/>
            </svg>
           </div>
           Table</button>
           </Link>

          <Link to={'/menu'}>
           <button className='button-page'>
           <div className='home-vector'>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
              <path d="M14.385 10.092V9.16204C14.9217 8.89004 15.497 8.68604 16.111 8.55004C16.725 8.41404 17.3547 8.34604 18 8.34604C18.3693 8.34604 18.7237 8.3697 19.063 8.41704C19.403 8.46437 19.7537 8.5317 20.115 8.61904V9.52704C19.7663 9.4157 19.4263 9.33837 19.095 9.29504C18.7637 9.25237 18.3987 9.23104 18 9.23104C17.3533 9.23104 16.7227 9.3037 16.108 9.44904C15.4927 9.59437 14.9183 9.8087 14.385 10.092ZM14.385 15.554V14.584C14.8963 14.3127 15.4683 14.1094 16.101 13.974C16.7337 13.8374 17.3667 13.769 18 13.769C18.3693 13.769 18.7237 13.7927 19.063 13.84C19.403 13.888 19.7537 13.9554 20.115 14.042V14.95C19.7663 14.8387 19.4263 14.7614 19.095 14.718C18.7637 14.6754 18.3987 14.654 18 14.654C17.3533 14.654 16.7227 14.732 16.108 14.888C15.4927 15.0447 14.9183 15.2667 14.385 15.554ZM14.385 12.842V11.873C14.9217 11.601 15.497 11.3974 16.111 11.262C16.7243 11.126 17.354 11.058 18 11.058C18.3693 11.058 18.7237 11.0814 19.063 11.128C19.403 11.176 19.7537 11.2437 20.115 11.331V12.238C19.7663 12.1267 19.4263 12.0497 19.095 12.007C18.7637 11.9637 18.3987 11.942 18 11.942C17.3533 11.942 16.7227 12.0214 16.108 12.18C15.4927 12.338 14.9183 12.5587 14.385 12.842ZM7 16.538C7.87333 16.538 8.72233 16.6384 9.547 16.839C10.3723 17.0397 11.19 17.3664 12 17.819V8.00804C11.278 7.4927 10.4823 7.10604 9.613 6.84804C8.74433 6.5907 7.87333 6.46204 7 6.46204C6.4 6.46204 5.87467 6.4977 5.424 6.56904C4.97333 6.64104 4.47333 6.77437 3.924 6.96904C3.76933 7.02037 3.66 7.09404 3.596 7.19004C3.532 7.2867 3.5 7.3927 3.5 7.50804V16.523C3.5 16.703 3.564 16.8344 3.692 16.917C3.82067 17.0004 3.96167 17.0104 4.115 16.947C4.48033 16.8237 4.90267 16.7247 5.382 16.65C5.86067 16.5754 6.4 16.538 7 16.538ZM13 17.819C13.81 17.3664 14.6277 17.0397 15.453 16.839C16.2777 16.639 17.1267 16.539 18 16.539C18.6 16.539 19.1393 16.576 19.618 16.65C20.0973 16.7247 20.5197 16.8234 20.885 16.946C21.0383 17.01 21.1793 17.0004 21.308 16.917C21.436 16.8337 21.5 16.7024 21.5 16.523V7.50804C21.5 7.3927 21.468 7.29004 21.404 7.20004C21.34 7.11004 21.231 7.03337 21.077 6.97004C20.527 6.7747 20.0267 6.64137 19.576 6.57004C19.1253 6.49804 18.6 6.46204 18 6.46204C17.1267 6.46204 16.2557 6.5907 15.387 6.84804C14.5177 7.10604 13.722 7.4927 13 8.00804V17.819ZM12.5 19.269C11.6867 18.713 10.8133 18.2857 9.88 17.987C8.94667 17.6877 7.98667 17.538 7 17.538C6.48 17.538 5.96867 17.5817 5.466 17.669C4.964 17.7564 4.47533 17.8964 4 18.089C3.63733 18.2337 3.29667 18.19 2.978 17.958C2.65933 17.726 2.5 17.4054 2.5 16.996V7.33104C2.5 7.0837 2.565 6.85404 2.695 6.64204C2.825 6.4307 3.00733 6.28337 3.242 6.20004C3.82933 5.94137 4.44033 5.7537 5.075 5.63704C5.70967 5.52037 6.35133 5.46204 7 5.46204C7.98 5.46204 8.93533 5.60304 9.866 5.88504C10.7973 6.16704 11.6753 6.57704 12.5 7.11504C13.3247 6.57704 14.2027 6.16704 15.134 5.88504C16.0653 5.60304 17.0207 5.46204 18 5.46204C18.6487 5.46204 19.2903 5.52037 19.925 5.63704C20.5597 5.7537 21.1707 5.94137 21.758 6.20004C21.9927 6.28337 22.175 6.4307 22.305 6.64204C22.435 6.85404 22.5 7.0837 22.5 7.33104V16.996C22.5 17.4054 22.328 17.7194 21.984 17.938C21.6393 18.158 21.2727 18.1954 20.884 18.05C20.4213 17.87 19.9487 17.74 19.466 17.66C18.9833 17.5787 18.4947 17.538 18 17.538C17.0133 17.538 16.0533 17.6877 15.12 17.987C14.1867 18.2857 13.3133 18.713 12.5 19.269Z" fill="white"/>
            </svg>
           </div>
           Menu</button>
           </Link>

          <Link to={'/settings'}>
           <button className='button-page'>
           <div className='home-vector'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M18 4.5C18 4.23478 17.8946 3.98043 17.7071 3.79289C17.5196 3.60536 17.2652 3.5 17 3.5C16.7348 3.5 16.4804 3.60536 16.2929 3.79289C16.1054 3.98043 16 4.23478 16 4.5V5.5H4C3.73478 5.5 3.48043 5.60536 3.29289 5.79289C3.10536 5.98043 3 6.23478 3 6.5C3 6.76522 3.10536 7.01957 3.29289 7.20711C3.48043 7.39464 3.73478 7.5 4 7.5H16V8.5C16 8.76522 16.1054 9.01957 16.2929 9.20711C16.4804 9.39464 16.7348 9.5 17 9.5C17.2652 9.5 17.5196 9.39464 17.7071 9.20711C17.8946 9.01957 18 8.76522 18 8.5V7.5H20C20.2652 7.5 20.5196 7.39464 20.7071 7.20711C20.8946 7.01957 21 6.76522 21 6.5C21 6.23478 20.8946 5.98043 20.7071 5.79289C20.5196 5.60536 20.2652 5.5 20 5.5H18V4.5ZM4 11.5C3.73478 11.5 3.48043 11.6054 3.29289 11.7929C3.10536 11.9804 3 12.2348 3 12.5C3 12.7652 3.10536 13.0196 3.29289 13.2071C3.48043 13.3946 3.73478 13.5 4 13.5H6V14.5C6 14.7652 6.10536 15.0196 6.29289 15.2071C6.48043 15.3946 6.73478 15.5 7 15.5C7.26522 15.5 7.51957 15.3946 7.70711 15.2071C7.89464 15.0196 8 14.7652 8 14.5V13.5H20C20.2652 13.5 20.5196 13.3946 20.7071 13.2071C20.8946 13.0196 21 12.7652 21 12.5C21 12.2348 20.8946 11.9804 20.7071 11.7929C20.5196 11.6054 20.2652 11.5 20 11.5H8V10.5C8 10.2348 7.89464 9.98043 7.70711 9.79289C7.51957 9.60536 7.26522 9.5 7 9.5C6.73478 9.5 6.48043 9.60536 6.29289 9.79289C6.10536 9.98043 6 10.2348 6 10.5V11.5H4ZM3 18.5C3 18.2348 3.10536 17.9804 3.29289 17.7929C3.48043 17.6054 3.73478 17.5 4 17.5H16V16.5C16 16.2348 16.1054 15.9804 16.2929 15.7929C16.4804 15.6054 16.7348 15.5 17 15.5C17.2652 15.5 17.5196 15.6054 17.7071 15.7929C17.8946 15.9804 18 16.2348 18 16.5V17.5H20C20.2652 17.5 20.5196 17.6054 20.7071 17.7929C20.8946 17.9804 21 18.2348 21 18.5C21 18.7652 20.8946 19.0196 20.7071 19.2071C20.5196 19.3946 20.2652 19.5 20 19.5H18V20.5C18 20.7652 17.8946 21.0196 17.7071 21.2071C17.5196 21.3946 17.2652 21.5 17 21.5C16.7348 21.5 16.4804 21.3946 16.2929 21.2071C16.1054 21.0196 16 20.7652 16 20.5V19.5H4C3.73478 19.5 3.48043 19.3946 3.29289 19.2071C3.10536 19.0196 3 18.7652 3 18.5Z" fill="white"/>
            </svg>
           </div>
           Settings</button>
           </Link>
    </div>
    </div>
  );
};

export default Home;
