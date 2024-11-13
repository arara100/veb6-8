import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { productId } = useParams();

  return (
    <section className="product-detail">
      <h2>Деталі продукту {productId}</h2>
      <p>Тут будуть деталі товару {productId}</p>
    </section>
  );
};

export default ProductDetail;
