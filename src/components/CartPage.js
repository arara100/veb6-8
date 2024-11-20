import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity, clearCart } from './cartSlice';

const CartPage = () => {
  const { items, totalQuantity, totalPrice } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleQuantityChange = (productId, newQuantity) => {
    dispatch(updateQuantity({ productId, quantity: newQuantity }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="cart-menu">
      <h2>Корзина</h2>
      {items.length === 0 ? (
        <p>Корзина порожня</p>
      ) : (
        <>
          <ul>
            {items.map(item => (
              <li key={item.id}>
                <div className="cart-item">
                  <img src={item.img} alt={item.name} />
                  <div>
                    <h3>{item.name}</h3>
                    <p>Ціна: ₴{item.price}</p>
                    <p>Кількість: 
                      <input 
                        type="number" 
                        min="1" 
                        value={item.quantity} 
                        onChange={(e) => handleQuantityChange(item.id, +e.target.value)}
                      />
                    </p>
                    <button onClick={() => handleRemove(item.id)}>Видалити</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <p>Загальна кількість: {totalQuantity}</p>
            <p>Загальна сума: ₴{totalPrice ? totalPrice.toFixed(2) : '0.00'}</p>
            <button onClick={handleClearCart}>Очистити корзину</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
