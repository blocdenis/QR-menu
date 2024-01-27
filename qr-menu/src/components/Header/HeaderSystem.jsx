import React from 'react';
import '../../css/scss/headerSystem.scss';
import { Link} from 'react-router-dom';

function HeaderSystem() {
  return (
    <div className='headsystem'>
    
        <button className='header-logo'>
            <h4 className='header-h4'>Your Logo</h4>
        </button>
        <svg className='svg-vector' xmlns="http://www.w3.org/2000/svg" width="1" height="16" viewBox="0 0 1 16" fill="none">
            <rect width="1" height="16" fill="white"/>
        </svg>
        <div >
            <h3 className='header-title'>Restourant control system</h3>              
            </div>
    <div className='header-link-logout'>
        <Link to={'/signinup'} ><b className='header-logout'>log out</b></Link>
    </div>
    </div>
  )
}

export default HeaderSystem
