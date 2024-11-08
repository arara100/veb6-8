// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import PopularGames from './components/PopularGames';
import SpecialOffers from './components/SpecialOffers';
import Footer from './components/Footer';
import Catalog from './components/Catalog';
import ProductDetail from './components/ProductDetail';

const App = () => {
  return (
    <Router>
      <Header />
      <Hero />
      
      <Routes>
        <Route path="/" element={<PopularGames />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/special-offers" element={<SpecialOffers />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
