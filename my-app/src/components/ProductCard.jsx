import React from 'react';
import './ProductCard.css';

function ProductCard({ 
  id, 
  name, 
  price, 
  originalPrice, 
  image, 
  rating, 
  reviews, 
  discount,
  onAddToCart,
  onViewDetails 
}) {
  const discountPercentage = discount ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <div className="product-card">
      {discount && (
        <div className="discount-badge">
          -{discountPercentage}%
        </div>
      )}
      
      <div className="product-image">
        <img src={image} alt={name} />
        <div className="product-overlay">
          <button 
            className="quick-view-btn"
            onClick={() => onViewDetails && onViewDetails(id)}
          >
            Быстрый просмотр
          </button>
        </div>
      </div>
      
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        
        <div className="product-rating">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <span 
                key={i} 
                className={`star ${i < rating ? 'filled' : ''}`}
              >
                ⭐
              </span>
            ))}
          </div>
          <span className="reviews-count">({reviews})</span>
        </div>
        
        <div className="product-price">
          <span className="current-price">₽{price.toLocaleString()}</span>
          {originalPrice && originalPrice > price && (
            <span className="original-price">₽{originalPrice.toLocaleString()}</span>
          )}
        </div>
        
        <button 
          className="add-to-cart-btn"
          onClick={() => onAddToCart && onAddToCart(id)}
        >
          Добавить в корзину
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
