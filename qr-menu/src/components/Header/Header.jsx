import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { logout } from './logout/exit';

function Header() {
  return (
    <>
      <div>
        <Link to={'/'} onClick={logout} className={styles.header_link}>
          <b className={styles.header_log}>Log out</b>
        </Link>
      </div>
    </>
  );
}
export default Header;
