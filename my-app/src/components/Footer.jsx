import React from 'react';
import './Footer.css';

function Footer({ 
  companyName = "ShopApp",
  socialLinks = {},
  contactInfo = {}
}) {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">{companyName}</h3>
            <p className="footer-description">
              Ваш надежный интернет-магазин с широким ассортиментом качественных товаров 
              по доступным ценам. Мы заботимся о каждом клиенте!
            </p>
            <div className="social-links">
              {socialLinks.facebook && (
                <a href={socialLinks.facebook} className="social-link">📘</a>
              )}
              {socialLinks.instagram && (
                <a href={socialLinks.instagram} className="social-link">📷</a>
              )}
              {socialLinks.twitter && (
                <a href={socialLinks.twitter} className="social-link">🐦</a>
              )}
              {socialLinks.youtube && (
                <a href={socialLinks.youtube} className="social-link">📺</a>
              )}
            </div>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Каталог</h4>
            <ul className="footer-links">
              <li><a href="#electronics">Электроника</a></li>
              <li><a href="#clothing">Одежда</a></li>
              <li><a href="#home">Дом и сад</a></li>
              <li><a href="#sports">Спорт</a></li>
              <li><a href="#books">Книги</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Помощь</h4>
            <ul className="footer-links">
              <li><a href="#delivery">Доставка</a></li>
              <li><a href="#returns">Возврат</a></li>
              <li><a href="#support">Поддержка</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#size-guide">Размеры</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Контакты</h4>
            <div className="contact-info">
              {contactInfo.phone && (
                <p>📞 {contactInfo.phone}</p>
              )}
              {contactInfo.email && (
                <p>✉️ {contactInfo.email}</p>
              )}
              {contactInfo.address && (
                <p>📍 {contactInfo.address}</p>
              )}
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 {companyName}. Все права защищены.</p>
            <div className="footer-bottom-links">
              <a href="#privacy">Политика конфиденциальности</a>
              <a href="#terms">Условия использования</a>
              <a href="#cookies">Cookie</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
