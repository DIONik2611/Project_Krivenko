import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import CategoryCard from './components/CategoryCard';
import Footer from './components/Footer';
import SearchModal from './components/SearchModal';
import CartModal from './components/CartModal';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  // Пример данных для товаров продуктового магазина
  const featuredProducts = [
    {
      id: 1,
      name: "Свежие яблоки Голден",
      price: 89,
      originalPrice: 120,
      image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400",
      rating: 5,
      reviews: 128,
      discount: true
    },
    {
      id: 2,
      name: "Молоко 3.2% 1л",
      price: 65,
      originalPrice: 75,
      image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400",
      rating: 4,
      reviews: 89,
      discount: true
    },
    {
      id: 3,
      name: "Хлеб бородинский",
      price: 45,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400",
      rating: 4,
      reviews: 67,
      discount: false
    },
    {
      id: 4,
      name: "Сыр Российский 200г",
      price: 180,
      originalPrice: 220,
      image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400",
      rating: 5,
      reviews: 156,
      discount: true
    }
  ];

  const newProducts = [
    {
      id: 5,
      name: "Свежие помидоры",
      price: 120,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400",
      rating: 4,
      reviews: 45,
      discount: false
    },
    {
      id: 6,
      name: "Куриная грудка 1кг",
      price: 350,
      originalPrice: 400,
      image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400",
      rating: 5,
      reviews: 203,
      discount: true
    },
    {
      id: 7,
      name: "Йогурт натуральный 500г",
      price: 85,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400",
      rating: 4,
      reviews: 34,
      discount: false
    },
    {
      id: 8,
      name: "Морковь свежая 1кг",
      price: 55,
      originalPrice: 70,
      image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400",
      rating: 4,
      reviews: 78,
      discount: true
    }
  ];

  const categories = [
    {
      id: 1,
      name: "Фрукты и овощи",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400",
      productCount: 1250
    },
    {
      id: 2,
      name: "Молочные продукты",
      image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400",
      productCount: 890
    },
    {
      id: 3,
      name: "Мясо и птица",
      image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400",
      productCount: 567
    },
    {
      id: 4,
      name: "Хлеб и выпечка",
      image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400",
      productCount: 423
    },
    {
      id: 5,
      name: "Напитки",
      image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400",
      productCount: 234
    },
    {
      id: 6,
      name: "Консервы",
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400",
      productCount: 345
    }
  ];

  const handleAddToCart = (productId) => {
    const allProducts = [...featuredProducts, ...newProducts];
    const product = allProducts.find(p => p.id === productId);
    
    if (product) {
      setCartItems(prev => {
        const existingItem = prev.find(item => item.id === productId);
        if (existingItem) {
          return prev.map(item => 
            item.id === productId 
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        } else {
          return [...prev, { ...product, quantity: 1 }];
        }
      });
    }
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const handleUpdateCartQuantity = (productId, newQuantity) => {
    setCartItems(prev => 
      prev.map(item => 
        item.id === productId 
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleViewDetails = (productId) => {
    console.log(`Просмотр деталей товара с ID: ${productId}`);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    const allProducts = [...featuredProducts, ...newProducts];
    
    if (!query || query.trim() === '') {
      setSearchResults([]);
      return;
    }
    
    const results = allProducts.filter(product => 
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
    console.log(`Поиск: "${query}", найдено: ${results.length} товаров`);
  };

  const handleSearchModalOpen = () => {
    setIsSearchModalOpen(true);
  };

  const handleSearchModalClose = () => {
    setIsSearchModalOpen(false);
    setSearchResults([]);
  };

  const handleCartModalOpen = () => {
    setIsCartModalOpen(true);
  };

  const handleCartModalClose = () => {
    setIsCartModalOpen(false);
  };

  const handleCategoryClick = (categoryId) => {
    console.log(`Выбрана категория с ID: ${categoryId}`);
  };

  const handleHeroCta = () => {
    console.log('Переход к каталогу');
  };

  const contactInfo = {
    phone: "+7 (800) 123-45-67",
    email: "info@freshmarket.ru",
    address: "Москва, ул. Тверская, 1"
  };

  const socialLinks = {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
    youtube: "https://youtube.com"
  };

  const totalCartItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="App">
      <Header 
        cartItems={totalCartItems}
        onSearch={handleSearch}
        onCartClick={handleCartModalOpen}
        onSearchClick={handleSearchModalOpen}
      />
      
      <Hero
        title="Добро пожаловать в FreshMarket"
        subtitle="Свежие продукты каждый день! Качественные фрукты, овощи, молочные продукты и многое другое. Быстрая доставка и доступные цены."
        backgroundImage="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&h=500&fit=crop"
        ctaText="Заказать продукты"
        onCtaClick={handleHeroCta}
      />

      <section className="categories-section">
        <div className="container">
          <h2 className="section-title">Популярные категории</h2>
          <div className="categories-grid">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                {...category}
                onClick={handleCategoryClick}
              />
            ))}
          </div>
        </div>
      </section>

      <ProductGrid
        title="Рекомендуемые товары"
        products={featuredProducts}
        onAddToCart={handleAddToCart}
        onViewDetails={handleViewDetails}
        onViewAll={() => console.log('Показать все рекомендуемые')}
      />

      <ProductGrid
        title="Новинки"
        products={newProducts}
        onAddToCart={handleAddToCart}
        onViewDetails={handleViewDetails}
        onViewAll={() => console.log('Показать все новинки')}
      />

      <Footer
        companyName="FreshMarket"
        contactInfo={contactInfo}
        socialLinks={socialLinks}
      />

      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={handleSearchModalClose}
        onSearch={handleSearch}
        searchResults={searchResults}
      />

      <CartModal
        isOpen={isCartModalOpen}
        onClose={handleCartModalClose}
        cartItems={cartItems}
        onRemoveItem={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateCartQuantity}
        onClearCart={handleClearCart}
      />
    </div>
  );
}

export default App;
