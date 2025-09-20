import React from 'react';
import './CategoryCard.css';

function CategoryCard({ 
  id, 
  name, 
  image, 
  productCount, 
  onClick 
}) {
  return (
    <div className="category-card" onClick={() => onClick && onClick(id)}>
      <div className="category-image">
        <img src={image} alt={name} />
        <div className="category-overlay">
          <span className="product-count">{productCount} товаров</span>
        </div>
      </div>
      <div className="category-info">
        <h3 className="category-name">{name}</h3>
      </div>
    </div>
  );
}

export default CategoryCard;
