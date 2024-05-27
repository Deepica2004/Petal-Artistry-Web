import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const FlowerDetailsPage = () => {
  const { id } = useParams();
  const flower = getFlowerDetailsById(id);

  const [quantity, setQuantity] = useState(1);
  const [vase, setVase] = useState(false);
  const [currentImage, setCurrentImage] = useState(flower.image);
  const [thumbnails, setThumbnails] = useState(flower.thumbnails);

  if (!flower) {
    return <div>Flower not found</div>;
  }

  const handleIncreaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const handleVaseChange = () => {
    setVase(!vase);
  };

  const handleThumbnailClick = (thumb, index) => {
    const newThumbnails = [...thumbnails];
    newThumbnails[index] = currentImage;
    setThumbnails(newThumbnails);
    setCurrentImage(thumb);
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: 'Montserrat, sans-serif',
    },
    imageContainer: {
      flex: '1',
      textAlign: 'center',
      position: 'relative',
    },
    image: {
      width: '80%',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      objectFit: 'cover',
    },
    thumbnails: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '10px',
    },
    thumbnail: {
      width: '50px',
      height: '50px',
      margin: '0 5px',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    details: {
      flex: '1',
      marginLeft: '20px',
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#2c3e50',
    },
    price: {
      fontSize: '20px',
      color: '#2c3e50',
      marginTop: '10px',
    },
    discount: {
      fontSize: '16px',
      color: '#e74c3c',
      textDecoration: 'line-through',
      marginRight: '10px',
    },
    option: {
      margin: '10px 0',
    },
    button: {
      padding: '10px 20px',
      margin: '10px 0',
      fontSize: '16px',
      cursor: 'pointer',
      borderRadius: '5px',
      border: 'none',
    },
    buyNowButton: {
      backgroundColor: '#e74c3c',
      color: '#fff',
    },
    addToCartButton: {
      backgroundColor: '#3498db',
      color: '#fff',
    },
    reviews: {
      marginTop: '20px',
    },
    review: {
      marginBottom: '10px',
    },
    reviewText: {
      fontSize: '16px',
      color: '#7f8c8d',
    },
    description: {
      marginTop: '20px',
      fontSize: '16px',
      color: '#2c3e50',
    },
    similarProducts: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '30px',
    },
    similarProduct: {
      width: '100px',
      height: '150px',
      margin: '0 10px',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    quantitySelector: {
      display: 'flex',
      alignItems: 'center',
    },
    quantityButton: {
      padding: '5px 10px',
      margin: '0 5px',
      fontSize: '16px',
      cursor: 'pointer',
      borderRadius: '5px',
      border: '1px solid #3498db',
      backgroundColor: '#3498db',
      color: '#fff',
    },
    quantityInput: {
      width: '50px',
      textAlign: 'center',
      borderRadius: '5px',
      border: '1px solid #ccc',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img
          src={`/${currentImage}`}
          alt="flower"
          style={styles.image}
        />
        <div style={styles.thumbnails}>
          {thumbnails.map((thumb, index) => (
            <img
              key={index}
              src={`/${thumb}`}
              alt="thumbnail"
              style={styles.thumbnail}
              onClick={() => handleThumbnailClick(thumb, index)}
            />
          ))}
        </div>
      </div>
      <div style={styles.details}>
        <div style={styles.title}>{flower.title}</div>
        <div style={styles.price}>
          <span style={styles.discount}>₹1000</span> {flower.price} (31% OFF)
        </div>
        <div style={styles.option}>
          <label>
            <input type="checkbox" checked={vase} onChange={handleVaseChange} />
            Add Vase ₹200
          </label>
        </div>
        <div style={styles.option}>
          <label>Quantity:</label>
          <div style={styles.quantitySelector}>
            <button onClick={handleDecreaseQuantity} style={styles.quantityButton}>-</button>
            <input type="text" value={quantity} readOnly style={styles.quantityInput} />
            <button onClick={handleIncreaseQuantity} style={styles.quantityButton}>+</button>
          </div>
        </div>
        <button style={{ ...styles.button, ...styles.buyNowButton }}>Buy Now</button>
        <button style={{ ...styles.button, ...styles.addToCartButton }}>Add to Cart</button>
        <div style={styles.reviews}>
          <h3>Reviews</h3>
          {flower.reviews.map((review, index) => (
            <div key={index} style={styles.review}>
              <div style={styles.reviewText}>{review}</div>
            </div>
          ))}
        </div>
        <div style={styles.description}>
          <h3>Description</h3>
          <p>{flower.description}</p>
        </div>
      </div>
    </div>
  );
};

const getFlowerDetailsById = (id) => {
  const flowers = [
    {
      id: '1',
      image: 'flower1.jpg',
      thumbnails: ['thumb1.jpg', 'thumb2.jpg', 'thumb3.jpg'],
      title: 'Bellina Purple Orchid Bouquet',
      price: '₹695',
      description: 'Among all the pretty things that grow in the world, the exquisite bouquet of orchids is usually one mesmerising sight.',
      reviews: ['Amazing!', 'Beautiful bouquet', 'Loved it!'],
    },
    {
      id: '2',
      image: 'flower2.jpg',
      thumbnails: ['thumb1.jpg', 'thumb2.jpg', 'thumb3.jpg'],
      title: '10 Red Rose Bouquet',
      price: '₹495',
      description: 'Among all the pretty things that grow in the world, the exquisite bouquet of orchids is usually one mesmerising sight.',
      reviews: ['Amazing!', 'Beautiful bouquet', 'Loved it!'],

    },

    // Add other flower details here...
  ];
  return flowers.find((flower) => flower.id === id);
};

export default FlowerDetailsPage;
