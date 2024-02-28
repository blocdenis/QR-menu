import { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBarSystem.scss';
import IconMenu from '../../SVG/IconMenu';
import IconHome from '../../SVG/IconHome';
import IconTable from '../../SVG/IconTable';
import IconSupport from '../../SVG/IconSupport';
import IconSetting from '../../SVG/IconSetting';
import LogoImg from '../../components/LogoImg/LogoImg.jsx';

function NavbarSystem() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenCategor, setIsOpenCategor] = useState(false);
  const openOrder = () => {
    setIsOpen(!isOpen);
  };
  const openCategor = () => {
    setIsOpenCategor(!isOpenCategor);
  };
  
  return (
    <div className="wrapper">
      <div className="navbar-wrap">
        <div className="div-logo">
          <LogoImg />
        </div>
        <Link to={'/home'} style={{ textDecoration: 'none' }}>
          <button className="btn-nav btn-home">
            <div className="svg-home">
              <IconHome />
            </div>
            <h4 className="btn-title">Home</h4>
          </button>
        </Link>
        <Link to={'/tables'} style={{ textDecoration: 'none' }}>
          <button onClick={openOrder} className="btn-nav btn-table">
            <div className="svg-table">
              <IconTable />
            </div>
            <h4 className="btn-title">Tables</h4>
          </button>
        </Link>
        <Link
          to={'/orders'}
          className="btn-nav btn-link"
          style={{ display: isOpen ? 'block' : 'none' }}
        >
          <h4 className="btn-title-orders">Orders</h4>
        </Link>
        {/* menu */}
        <Link to={'/menu'} style={{ textDecoration: 'none' }}>
          <button onClick={openCategor} className="btn-nav">
            <div className="svg-menu">
              <IconMenu />
            </div>
            <h4 className="btn-title">Menu</h4>
          </button>
        </Link>
        <Link
          to={'/categor'}
          className="btn-nav btn-link"
          style={{ display: isOpenCategor ? 'block' : 'none' }}
        >
          <h4 className="btn-title-orders">Categories</h4>
        </Link>
        {/* settings */}
        <Link to={'/setting'} style={{ textDecoration: 'none' }}>
          <button className="btn-nav">
            <div className="svg-settings">
              <IconSetting />
            </div>
            <h4 className="btn-title">Settings</h4>
          </button>
        </Link>
        {/*support */}
        <Link to={'/support'} style={{ textDecoration: 'none' }}>
          <button className="btn-nav btn-support">
            <div className="svg-support">
              <IconSupport />
            </div>
            <h4 className="btn-title">Support</h4>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NavbarSystem;
