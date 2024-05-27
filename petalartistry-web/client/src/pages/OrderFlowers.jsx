import React, { useState } from 'react';

const OrderFlowers = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [flowerType, setFlowerType] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orderDetails = { name, address, flowerType, quantity };

    try {
      const response = await fetch('/api/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderDetails),
      });

      if (response.ok) {
        alert('Order placed successfully!');
        // Reset form fields
        setName('');
        setAddress('');
        setFlowerType('');
        setQuantity(1);
      } else {
        alert('Failed to place order.');
      }
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Error placing order.');
    }
  };

  return (
    <div>
      <h2>Order Flowers</h2>
      <p>Here you can order flowers.</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Address:</label>
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
        </div>
        <div>
          <label>Flower Type:</label>
          <input type="text" value={flowerType} onChange={(e) => setFlowerType(e.target.value)} required />
        </div>
        <div>
          <label>Quantity:</label>
          <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} required min="1" />
        </div>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default OrderFlowers;
