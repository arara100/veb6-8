import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import PopularGames from './components/PopularGames';
import Catalog from './components/Catalog';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        {/* Якщо немає авторизації, автоматично перенаправляємо на /login */}
        <Route path="/login" element={<Login />} />
        <Route
          path="/catalog"
          element={
            <ProtectedRoute>
              <Catalog />
            </ProtectedRoute>
          }
        />
        <Route
          path="/"
          element={
            <RequireLogin>
              <PopularGames />
            </RequireLogin>
          }
        />
      </Routes>

      <Footer />
    </Router>
  );
};

// Компонент для перенаправлення незареєстрованого користувача
const RequireLogin = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');
    if (!userEmail) {
      navigate('/login');
    }
  }, [navigate]);

  return children;
};

export default App;
