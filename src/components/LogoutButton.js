import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LogoutButton.css'; // Підключаємо стилі

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userEmail');
    navigate('/login');
  };

  return <button onClick={handleLogout} className="logout-button">Вийти</button>;
};

export default LogoutButton;

