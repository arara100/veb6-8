import React from 'react';
import PrimaryButton from './PrimaryButton';
import Select from './Select';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'Гра 1', price: '₴1400', img: 'deps/img/asset-1.jpg' },
  { id: 2, name: 'Гра 2', price: '₴1500', img: 'deps/img/asset-2.jpg' },
  { id: 3, name: 'Гра 3', price: '₴1600', img: 'deps/img/asset-3.jpg' },
  { id: 4, name: 'Гра 4', price: '₴1700', img: 'deps/img/asset-4.jpg' }
];

const Catalog = () => {
  const options = [
    { label: 'Всі ігри', value: 'all' },
    { label: 'Ігри до ₴1500', value: 'under1500' },
    { label: 'Ігри більше ₴1500', value: 'over1500' }
  ];

  // Function to handle category selection (future functionality)
  const handleSelectChange = (event) => {
    console.log('Selected filter:', event.target.value);
  };

  return (
    <section className="catalog">
      <h2>Каталог ігор</h2>

      {/* Select component for filtering */}
      <Select options={options} onChange={handleSelectChange} value="all" />

      {/* Render product list */}
      <div className="game-grid">
        {products.map((product) => (
          <div className="game-card" key={product.id}>
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <Link to={`/product/${product.id}`}>
              <PrimaryButton text="Додати в кошик" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Catalog;