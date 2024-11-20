import React, { useState, useEffect } from 'react';
import PrimaryButton from './PrimaryButton';
import Select from './Select';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from './cartSlice';


const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('all');
  const [sortOrder, setSortOrder] = useState('asc');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const dispatch = useDispatch(); // Хук для виклику екшенів Redux

  const options = [
    { label: 'Всі ігри', value: 'all' },
    { label: 'Ігри до ₴1500', value: 'under1500' },
    { label: 'Ігри більше ₴1500', value: 'over1500' }
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const params = {};
        if (filter === 'under1500') {
          params.price_max = 1500;
        } else if (filter === 'over1500') {
          params.price_min = 1500;
        }

        const response = await axios.get('http://localhost:8000/api/products/', { params });
        setProducts(response.data);
      } catch (error) {
        setError('Не вдалося завантажити продукти. Спробуйте ще раз.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [filter]);

  const filteredProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === 'asc') return a.price - b.price;
    if (sortOrder === 'desc') return b.price - a.price;
    return 0;
  });

  const handleSelectChange = (event) => {
    setFilter(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product)); // Додаємо товар до корзини
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
      </div>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section className="catalog">
      <h2>Каталог ігор</h2>

      <input
        type="text"
        placeholder="Пошук по назві..."
        value={searchQuery}
        onChange={handleSearchChange}
      />

      <Select options={options} onChange={handleSelectChange} value={filter} />

      <Select
        options={[
          { label: 'Від дешевих до дорогих', value: 'asc' },
          { label: 'Від дорогих до дешевих', value: 'desc' }
        ]}
        onChange={handleSortChange}
        value={sortOrder}
      />

      <div className="game-grid">
        {sortedProducts.map((product) => (
          <div className="game-card" key={product.id}>
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p>₴{product.price}</p>
            <Link to={`/product/${product.id}`}>
              <PrimaryButton text="Детальніше" />
            </Link>
            <button
              onClick={() => handleAddToCart(product)}
              className="add-to-cart-button"
            >
              Додати до корзини
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Catalog;
