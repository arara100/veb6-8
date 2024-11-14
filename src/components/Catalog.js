import React, { useState } from 'react';
import PrimaryButton from './PrimaryButton';
import Select from './Select';
import { Link } from 'react-router-dom';
import products from './products';

const Catalog = () => {
  const [filter, setFilter] = useState('all');
  const [sortOrder, setSortOrder] = useState('asc');
  const [searchQuery, setSearchQuery] = useState('');

  const options = [
    { label: 'Всі ігри', value: 'all' },
    { label: 'Ігри до ₴1500', value: 'under1500' },
    { label: 'Ігри більше ₴1500', value: 'over1500' }
  ];

  const handleSelectChange = (event) => {
    setFilter(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProducts = products.filter((product) => {

    if (filter === 'under1500' && product.price > 1500) return false;
    if (filter === 'over1500' && product.price <= 1500) return false;

    return product.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === 'asc') return a.price - b.price;
    if (sortOrder === 'desc') return b.price - a.price;
    return 0;
  });

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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Catalog;
