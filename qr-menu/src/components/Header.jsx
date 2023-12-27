import { Link} from 'react-router-dom';
import '../css/scss/header.scss';

function Header(){

    return(
        <>
        <div>
        <Link to={'/signinup'} className='header-link'><b className='header-log'>Log out</b></Link>
        </div>    
        </>
    )
}
export default Header;