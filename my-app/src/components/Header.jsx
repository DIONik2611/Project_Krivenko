import React, { useState } from 'react';
import './Header.css';

function Header({ cartItems = 0, onSearch, onCartClick, onSearchClick }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>FreshMarket</h1>
        </div>
        
        <nav className="navigation">
          <ul className="nav-list">
            <li><a href="#home">Главная</a></li>
            <li><a href="#categories">Категории</a></li>
            <li><a href="#products">Товары</a></li>
            <li><a href="#about">О нас</a></li>
            <li><a href="#contact">Контакты</a></li>
          </ul>
        </nav>

        <div className="header-actions">
          <div className="search-box">
            <input 
              type="text" 
              placeholder="Поиск товаров..." 
              value={searchQuery}
              onChange={handleSearchInputChange}
              onKeyPress={(e) => {
                if (e.key === 'Enter' && searchQuery.trim()) {
                  onSearch && onSearch(searchQuery.trim());
                }
              }}
            />
            <button 
              className="search-btn"
              onClick={() => {
                if (searchQuery.trim()) {
                  onSearch && onSearch(searchQuery.trim());
                } else {
                  onSearchClick && onSearchClick();
                }
              }}
              title="Поиск товаров"
            >
              🔍
            </button>
          </div>
          
          <div className="cart">
            <button className="cart-btn" onClick={onCartClick}>
              🛒 Корзина ({cartItems})
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
