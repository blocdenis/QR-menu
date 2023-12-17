import { Link} from 'react-router-dom';
import '../css/scss/header.scss';

function Header(){

    return(
        <>
        <div>
        <Link to={'/singup'} className='header-link'><h3 className='header-log'><b>Log out</b></h3></Link>
        </div>    
        </>
    )
}
export default Header;