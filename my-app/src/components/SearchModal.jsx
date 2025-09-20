import React, { useState, useEffect } from 'react';
import './SearchModal.css';

function SearchModal({ isOpen, onClose, onSearch, searchResults = [] }) {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch && searchQuery.trim()) {
      onSearch(searchQuery.trim());
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    // Автоматический поиск при вводе
    if (onSearch && value.trim()) {
      onSearch(value.trim());
    } else if (onSearch && !value.trim()) {
      onSearch('');
    }
  };

  const handleClose = () => {
    setSearchQuery('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="search-modal-overlay" onClick={handleClose}>
      <div className="search-modal" onClick={(e) => e.stopPropagation()}>
        <div className="search-modal-header">
          <h2>Поиск товаров</h2>
          <button className="close-btn" onClick={handleClose}>×</button>
        </div>
        
        <form className="search-form" onSubmit={handleSearch}>
          <div className="search-input-group">
            <input
              type="text"
              placeholder="Введите название товара..."
              value={searchQuery}
              onChange={handleInputChange}
              autoFocus
            />
            <button type="submit" className="search-submit-btn">
              🔍
            </button>
          </div>
        </form>

        {searchResults.length > 0 && (
          <div className="search-results">
            <h3>Результаты поиска ({searchResults.length})</h3>
            <div className="results-grid">
              {searchResults.map((product) => (
                <div key={product.id} className="search-result-item">
                  <img src={product.image} alt={product.name} />
                  <div className="result-info">
                    <h4>{product.name}</h4>
                    <p className="result-price">₽{product.price.toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {searchQuery && searchResults.length === 0 && (
          <div className="no-results">
            <p>По запросу "{searchQuery}" ничего не найдено</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchModal;
