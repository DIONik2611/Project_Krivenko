import React from 'react';
import './CartModal.css';

function CartModal({ isOpen, onClose, cartItems = [], onRemoveItem, onUpdateQuantity, onClearCart }) {
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleClose = () => {
    onClose();
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      onRemoveItem(itemId);
    } else {
      onUpdateQuantity(itemId, newQuantity);
    }
  };

  const handleCheckout = () => {
    alert('Переход к оформлению заказа!');
  };

  if (!isOpen) return null;

  return (
    <div className="cart-modal-overlay" onClick={handleClose}>
      <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
        <div className="cart-modal-header">
          <h2>Корзина ({totalItems})</h2>
          <button className="close-btn" onClick={handleClose}>×</button>
        </div>

        <div className="cart-content">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <div className="empty-cart-icon">🛒</div>
              <h3>Корзина пуста</h3>
              <p>Добавьте товары, чтобы они появились здесь</p>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {cartItems.map((item) => (
                  <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.name} className="cart-item-image" />
                    
                    <div className="cart-item-info">
                      <h4 className="cart-item-name">{item.name}</h4>
                      <p className="cart-item-price">₽{item.price.toLocaleString()}</p>
                    </div>

                    <div className="cart-item-controls">
                      <button 
                        className="quantity-btn"
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      >
                        -
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button 
                        className="quantity-btn"
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>

                    <div className="cart-item-total">
                      ₽{(item.price * item.quantity).toLocaleString()}
                    </div>

                    <button 
                      className="remove-btn"
                      onClick={() => onRemoveItem(item.id)}
                    >
                      🗑️
                    </button>
                  </div>
                ))}
              </div>

              <div className="cart-summary">
                <div className="cart-total">
                  <div className="total-line">
                    <span>Товары ({totalItems}):</span>
                    <span>₽{totalPrice.toLocaleString()}</span>
                  </div>
                  <div className="total-line">
                    <span>Доставка:</span>
                    <span>Бесплатно</span>
                  </div>
                  <div className="total-line total-final">
                    <span>Итого:</span>
                    <span>₽{totalPrice.toLocaleString()}</span>
                  </div>
                </div>

                <div className="cart-actions">
                  <button className="clear-cart-btn" onClick={onClearCart}>
                    Очистить корзину
                  </button>
                  <button className="checkout-btn" onClick={handleCheckout}>
                    Оформить заказ
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default CartModal;
