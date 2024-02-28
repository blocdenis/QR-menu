// Sidebar.js
import React from 'react';
import { SidebarItem } from './SidebarItem.jsx';
import { HomeIcon } from '../../assets/HomeIcon.jsx';
import { TablesIcon } from '../../assets/TablesIcon.jsx';
import { MenuIcon } from '../../assets/MenuIcon.jsx';
import { SettingsIcon } from '../../assets/SettingsIcon.jsx';
import { SupportIcon } from '../../assets/SupportIcon.jsx';
import LogoImg from '../LogoImg/LogoImg.jsx';
import './Sidebar.scss';

export const Sidebar = () => {
  return (
    <aside className="aside">
      <LogoImg />
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
          <SidebarItem path="/menu" icon={<MenuIcon />}>
            Menu
          </SidebarItem>
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
