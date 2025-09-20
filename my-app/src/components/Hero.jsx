import React from 'react';
import './Hero.css';

function Hero({ title, subtitle, backgroundImage, ctaText, onCtaClick }) {
  return (
    <section className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">{title}</h1>
          <p className="hero-subtitle">{subtitle}</p>
          <button className="hero-cta" onClick={onCtaClick}>
            {ctaText}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
