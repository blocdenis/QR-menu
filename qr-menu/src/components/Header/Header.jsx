import { Link} from 'react-router-dom';
import '../../css/scss/header.scss';
///css/scss/header.scss

import { logout } from './logout/exit';


function Header(){

    return(
        <>
        <div>
        <Link to={'/'} onClick={logout} className='header-link'><b className='header-log'>Log out</b></Link>
        </div>    
        </>
    )
}
export default Header;