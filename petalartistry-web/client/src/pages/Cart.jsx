import React, { useState } from 'react';

const Cart = () => {
  const [cart, setCart] = useState([
    { id: 1, name: '1/2 Kg Chocolate Cake', price: 549, quantity: 1, imageUrl: 'path_to_chocolate_cake_image' },
    { id: 2, name: '10 Inch Puppy Love Teddy', price: 495, quantity: 1, imageUrl: 'path_to_teddy_image' },
    { id: 3, name: 'Birthday Card', price: 129, quantity: 1, imageUrl: 'path_to_birthday_card_image' }
  ]);

  const handleQuantityChange = (id, delta) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + delta } : item
    ));
  };

  const handleRemoveItem = id => {
    setCart(cart.filter(item => item.id !== id));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart">
      <h2>4 Express Delivery Products</h2>
      <div className="cart-items">
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.imageUrl} alt={item.name} />
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>₹ {item.price}</p>
              <div className="quantity-control">
                <button onClick={() => handleQuantityChange(item.id, -1)} disabled={item.quantity <= 1}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
              </div>
              <button className="remove-button" onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h3>Cart Summary</h3>
        <p>Grand Total: ₹ {calculateTotal()}</p>
        <button className="place-order">Place Order</button>
        <p className="checkout-note">Have a Coupon Code? You can apply the discount coupon in the Checkout Process</p>
      </div>
      <div className="continue-shopping">
        <button>Continue Shopping</button>
      </div>
      <div className="additional-info">
        <p>No Hidden Charge</p>
        <p>100% Secure payments</p>
        <p>7 Million Smiles Delivered</p>
      </div>
      <style jsx>{`
        .cart {
          padding: 20px;
        }
        
        .cart-items {
          display: flex;
          flex-direction: column;
        }
        
        .cart-item {
          display: flex;
          margin-bottom: 20px;
        }
        
        .cart-item img {
          width: 100px;
          height: 100px;
          object-fit: cover;
        }
        
        .item-details {
          margin-left: 20px;
        }
        
        .quantity-control {
          display: flex;
          align-items: center;
        }
        
        .quantity-control button {
          width: 30px;
          height: 30px;
          text-align: center;
          margin: 0 5px;
        }
        
        .remove-button {
          background-color: red;
          color: white;
          border: none;
          padding: 5px 10px;
          cursor: pointer;
        }
        
        .cart-summary {
          border-top: 1px solid #ccc;
          padding-top: 20px;
        }
        
        .cart-summary h3 {
          margin-bottom: 10px;
        }
        
        .cart-summary p {
          font-size: 18px;
          font-weight: bold;
        }
        
        .place-order {
          background-color: #007bff;
          color: white;
          border: none;
          padding: 10px 20px;
          cursor: pointer;
        }
        
        .checkout-note {
          margin-top: 10px;
          font-size: 12px;
        }
        
        .continue-shopping {
          margin-top: 20px;
        }
        
        .continue-shopping button {
          background-color: #28a745;
          color: white;
          border: none;
          padding: 10px 20px;
          cursor: pointer;
        }
        
        .additional-info {
          margin-top: 20px;
          display: flex;
          justify-content: space-between;
        }
        
        .additional-info p {
          margin: 0;
        }
      `}</style>
    </div>
  );
};

export default Cart;
