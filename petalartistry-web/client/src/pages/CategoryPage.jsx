import React from 'react';
import { Link } from 'react-router-dom';

const CategoryPage = ({ title, products }) => {
  const styles = {
    container: {
      padding: '40px 20px',
      textAlign: 'center',
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#2c3e50',
      fontFamily: 'Montserrat, sans-serif',
      marginBottom: '20px',
    },
    grid: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      flexWrap: 'wrap',
    },
    item: {
      width: '200px',
      textAlign: 'center',
      cursor: 'pointer',
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
    productTitle: {
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#2c3e50',
      fontFamily: 'Montserrat, sans-serif',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{title}</h2>
      <div style={styles.grid}>
        {products.map((product) => (
          <Link
            to={`/flower-details/${product.id}`}
            key={product.id}
            style={styles.item}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <img src={product.image} alt={product.title} style={styles.image} />
            <div style={styles.productTitle}>{product.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
