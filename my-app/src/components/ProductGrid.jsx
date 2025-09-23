import React from 'react';
import ProductCard from './ProductCard';
import './ProductGrid.css';

function ProductGrid({ 
  title, 
  products = [], 
  onAddToCart, 
  onViewDetails,
  showViewAll = true,
  onViewAll 
}) {
  return (
    <section className="product-grid-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{title}</h2>
          {showViewAll && (
            <button className="view-all-btn" onClick={onViewAll}>
              Смотреть все →
            </button>
          )}
        </div>
        
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onAddToCart={onAddToCart}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductGrid;
