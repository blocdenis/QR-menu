import { Link} from 'react-router-dom';
import '../../css/scss/header.scss';
///css/scss/header.scss
import { useCookies } from "react-cookie";
function Header(){
    const [cookies, setCookie, removeCookie] = useCookies(["token"]);
function HandledeleteToken(){
    removeCookie('token', {path: '/'});
    console.log(cookies);
}
    return(
        <>
        <div>
        <Link to={'/'} className='header-link'><b className='header-log' onClick={HandledeleteToken}>Log out</b></Link>
        </div>    
        </>
    )
}
export default Header;