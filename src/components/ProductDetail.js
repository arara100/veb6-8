import React from 'react';
import { useParams } from 'react-router-dom';
import products from './products';

const ProductDetail = () => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <p>Продукт не знайдено.</p>;
  }

  return (
    <section className="product-detail">
      <img src={product.img} alt={product.name} />
      <h2>{product.name}</h2>
      <p>Ціна: ₴{product.price}</p>
      <p>Жанр: {product.genre}</p>
      <p>Рейтинг: {product.rating} / 5</p>
      <p>{product.description}</p>
    </section>
  );
};

export default ProductDetail;
