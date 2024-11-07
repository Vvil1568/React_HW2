import React from 'react';
import './Navigation.css';

interface NavigationProps {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <nav className="navigation">
      <button className="menu-toggle" onClick={toggleSidebar}>
        {isSidebarOpen ? <span>×</span> : <span>☰</span>}
      </button>
      <ul className="nav-list">
        <li className="nav-item">Товары</li>
        <li className="nav-item">Склады</li>
        <li className="nav-item">О системе</li>
        <li className="nav-item">Личный кабинет</li>
      </ul>
    </nav>
  );
};

export default Navigation;