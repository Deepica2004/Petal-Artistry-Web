import React from 'react';
import { Link } from 'react-router-dom';

const ValentineFlowers = () => {
  const flowers = [
    { id: 1, image: 'image1.jpg', title: 'Bellina Purple Orchid Bouquet', price: '₹695', originalPrice: '₹999', discount: '31% OFF', rating: '4.9', reviews: '(609)', delivery: 'In 3 hours' },
    { id: 2, image: 'image2.jpg', title: '10 Red Rose Bouquet', price: '₹495', rating: '4.9', reviews: '(195)', delivery: 'In 3 hours' },
    { id: 3, image: 'image3.jpg', title: 'Anthophile Love', price: '₹755', rating: '4.7', reviews: '(180)', delivery: '2-3 days' },
    { id: 4, image: 'image4.jpg', title: 'White Daisy', price: '₹1200', rating: '5.0', reviews: '(1)', delivery: '2-3 days' },
    { id: 5, image: 'image5.jpg', title: 'Eternity White Roses Bouquet', price: '₹1200', rating: '5.0', reviews: '(1)', delivery: '2-3 days' },
    { id: 6, image: 'image6.jpg', title: '40 Carnations Bouquet', price: '₹1200', rating: '4.8', reviews: '(220)', delivery: 'In 3 hours' },
    { id: 7, image: 'image7.jpg', title: '50 Red Roses', price: '₹1500', rating: '4.7', reviews: '(180)', delivery: 'In 3 hours' },
    { id: 8, image: 'image8.jpg', title: 'Mixed Flowers Basket', price: '₹1800', rating: '4.6', reviews: '(150)', delivery: 'In 3 hours' },
    { id: 9, image: 'image9.jpg', title: 'Orchids & Lilies', price: '₹2000', rating: '4.9', reviews: '(195)', delivery: 'In 3 hours' },
    { id: 10, image: 'image10.jpg', title: 'Exotic Flower Arrangement', price: '₹2500', rating: '4.8', reviews: '(220)', delivery: 'In 3 hours' },
  ];

  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: '10px',
  };

  const flowerCardStyle = {
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '10px',
    margin: '10px 5px',
    textAlign: 'center',
    width: 'calc(20% - 10px)',
    boxSizing: 'border-box',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s',
  };

  const flowerImageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '10px 10px 0 0',
    transition: 'transform 0.3s',
  };

  const flowerTitleStyle = {
    fontSize: '14px',
    fontWeight: 'bold',
    margin: '10px 0 5px 0',
    color: '#333',
    
  };

  const flowerDetailsStyle = {
    fontSize: '12px',
    color: '#666',
    margin: '5px 0',
  };

  const priceStyle = {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#333',
  };

  const originalPriceStyle = {
    fontSize: '12px',
    textDecoration: 'line-through',
    color: 'red',
    marginRight: '5px',
  };

  const discountStyle = {
    fontSize: '12px',
    color: 'red',
  };

  const ratingStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '5px',
  };

  const ratingValueStyle = {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#4CAF50',
    marginLeft: '5px',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'inherit',
  };

  return (
    <div>
      <h1>Valentine Flowers</h1>
      <div style={containerStyle}>
        {flowers.map(flower => (
          <div key={flower.id} style={flowerCardStyle} className="flower-card">
            <Link to={`/flowerdetails/${flower.id}`} style={linkStyle}>
              <img src={flower.image} alt={flower.title} style={flowerImageStyle} className="flower-image" />
              <div style={flowerTitleStyle}>{flower.title}</div>
              {flower.originalPrice && (
                <div style={flowerDetailsStyle}>
                  <span style={originalPriceStyle}>{flower.originalPrice}</span>
                  <span style={discountStyle}>{flower.discount}</span>
                </div>
              )}
              <div style={priceStyle}>{flower.price}</div>
              <div style={flowerDetailsStyle}>
                <span style={{ color: 'gold' }}>★</span>
                <span style={ratingValueStyle}>{flower.rating}</span>
                <span>{flower.reviews}</span>
              </div>
              <div style={flowerDetailsStyle}>Earliest Delivery: {flower.delivery}</div>
            </Link>
          </div>
        ))}
      </div>
      <style>
        {`
          .flower-card:hover {
            transform: scale(1.05);
          }
          .flower-image:hover {
            transform: scale(1.1);
          }
        `}
      </style>
    </div>
  );
};

export default ValentineFlowers;
