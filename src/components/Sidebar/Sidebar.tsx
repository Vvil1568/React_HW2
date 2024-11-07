import React from 'react';
import './Sidebar.css';

interface SidebarProps {
    isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {

    if (!isOpen) {
        return null;
    }

    return (
        <aside className="sidebar">
            <input type="text" placeholder="Искать..." className="search-input" />
            <div className="filter-checkbox">
                <input type="checkbox" id="nonZeroQuantity" />
                <label htmlFor="nonZeroQuantity">Только товары в наличии</label>
            </div>
            <select className="category-select">
                <option value="">Все категории</option>
                <option value="electronics">Электроника</option>
                <option value="clothing">Одежда</option>
                <option value="kitchen">Техника для кухни</option>
                <option value="books">Книги</option>
            </select>

        </aside>
    );
};


export default Sidebar;