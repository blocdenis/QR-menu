// Sidebar.js
import { useState } from 'react';
import { SidebarItem } from './SidebarItem.jsx';
import { HomeIcon } from '../../assets/HomeIcon.jsx';
import { TablesIcon } from '../../assets/TablesIcon.jsx';
import { MenuIcon } from '../../assets/MenuIcon.jsx';
import { SettingsIcon } from '../../assets/SettingsIcon.jsx';
import { SupportIcon } from '../../assets/SupportIcon.jsx';
import LogoImg from '../LogoImg/LogoImg.jsx';
import './Sidebar.scss';
import { Link } from 'react-router-dom';

export const Sidebar = ({ restaurantLogo }) => {
  const [isOpenCategor, setIsOpenCategor] = useState(false);
  const openCategor = () => {
    setIsOpenCategor(!isOpenCategor);
  };

  return (
    <aside className="aside">
      <LogoImg rest_logo={restaurantLogo}/>
      <ul>
        <li>
          <SidebarItem path="/home" icon={<HomeIcon />}>
            Home
          </SidebarItem>
        </li>
        <li>
          <SidebarItem path="/tables" icon={<TablesIcon />}>
            Tables
          </SidebarItem>
        </li>
        <li>
        <div onClick={openCategor}>
          <SidebarItem path="/menu" icon={<MenuIcon />} >
            Menu
          </SidebarItem>
          </div>
          <Link
            to={'/categor'}
            className="btn-nav-categ content"
            style={{ display: isOpenCategor ? 'block' : 'none' }}
          >
            <h4 className="btn-title-orders">Categories</h4>
          </Link>
        </li>
        <li>
          <SidebarItem path="/settings" icon={<SettingsIcon />}>
            Settings
          </SidebarItem>
        </li>
        <li>
          <SidebarItem path="/support" icon={<SupportIcon />}>
            Support
          </SidebarItem>
        </li>
      </ul>
    </aside>
  );
};
