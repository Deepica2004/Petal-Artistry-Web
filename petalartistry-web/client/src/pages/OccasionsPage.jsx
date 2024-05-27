// src/OccasionsPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

const OccasionsPage = () => {
  const { type } = useParams();
  const flowersData = {
    valentine: [
      // Add your flowers data for Valentine here
    ],
    anniversary: [
      // Add your flowers data for Anniversary here
    ],
    forhim: [
      // Add your flowers data for Him here
    ],
    forher: [
      // Add your flowers data for Her here
    ],
  };

  const flowers = flowersData[type] || [];

  const styles = {
    container: {
      padding: '20px',
      textAlign: 'center',
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    grid: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      flexWrap: 'wrap',
    },
    item: {
      textAlign: 'center',
      width: '200px',
      transition: 'transform 0.3s',
    },
    image: {
      width: '100%',
      height: '200px',
      borderRadius: '8px',
      objectFit: 'cover',
      marginBottom: '10px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    title: {
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#2c3e50',
    },
    price: {
      fontSize: '16px',
      color: '#2c3e50',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{type.replace(/(^\w|\s\w)/g, m => m.toUpperCase())} Flowers</h1>
      <div style={styles.grid}>
        {flowers.map(flower => (
          <div key={flower.id} style={styles.item}>
            <img src={flower.image} alt={flower.title} style={styles.image} />
            <div style={styles.title}>{flower.title}</div>
            <div style={styles.price}>{flower.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OccasionsPage;
