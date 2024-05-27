import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaSearch, FaGift, FaMapMarkerAlt, FaBars, FaStar,FaPhone,FaFacebook,FaInstagram,FaTwitter,FaEnvelope } from 'react-icons/fa';
import { GiFlowerPot } from 'react-icons/gi';
import FlowerDetailsPage from './FlowerDetailsPage'; 

const Home = () => {
  const [dropdown, setDropdown] = useState({
    flowers: false,
    combos: false,
    anniversary: false,
    birthday: false,
    occasions: false,
  });

  const handleMouseEnter = (menu) => {
    setDropdown({ ...dropdown, [menu]: true });
  };

  const handleMouseLeave = (menu) => {
    setDropdown({ ...dropdown, [menu]: false });
  };

  const styles = {
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 20px',
      backgroundColor: '#fff',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Montserrat, sans-serif',
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    logo: {
      marginRight: '10px',
    },
    siteName: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#2c3e50',
    },
    navLinks: {
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
    },
    navIcon: {
      color: '#2c3e50',
    },
    searchContainer: {
      display: 'flex',
      alignItems: 'center',
      padding: '20px 0',
      backgroundColor: '#f4f4f4',
    },
    searchIcon: {
      marginRight: '10px',
      color: '#2c3e50',
    },
    searchBar: {
      width: '50%',
      padding: '10px',
      fontSize: '16px',
      borderRadius: '5px',
      border: '1px solid #ddd',
      fontFamily: 'Montserrat, sans-serif',
    },
    categories: {
      display: 'flex',
      justifyContent: 'center',
      gap: '30px',
      padding: '20px 0',
      backgroundColor: '#fff',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    categoryLink: {
      textDecoration: 'none',
      color: '#ff69b4',
      fontSize: '18px',
      fontWeight: 'bold',
      position: 'relative',
      fontFamily: 'Montserrat, sans-serif',
    },
    dropdown: {
      position: 'absolute',
      top: '100%',
      left: '0',
      backgroundColor: '#fff',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      padding: '20px',
      borderRadius: '5px',
      zIndex: '1000',
      justifyContent: 'space-around',
    },
    dropdownColumn: {
      margin: '0 20px',
    },
    dropdownItem: {
      padding: '5px 0',
      color: '#2c3e50',
      textDecoration: 'none',
      display: 'block',
      fontFamily: 'Montserrat, sans-serif',
    },
    heroImageContainer: {
      display: 'flex',
      justifyContent: 'center',
      padding: '20px 0',
    },
    heroImage: {
      width: '80%',
      height: '300px',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      objectFit: 'cover',
    },
    shopByOccasionsContainer: {
      textAlign: 'center',
      textDecoration: 'none',
      padding: '40px 20px',
    },
    shopByOccasionsTitle: {
      fontSize: '24px',
      textDecoration: 'none',
      fontWeight: 'bold',
      marginBottom: '10px',
      color: '#2c3e50',
      fontFamily: 'Montserrat, sans-serif',
    },
    shopByOccasionsSubtitle: {
      fontSize: '18px',
      textDecoration: 'none',
      color: '#7f8c8d',
      marginBottom: '30px',
      fontFamily: 'Montserrat, sans-serif',
    },
    occasionsGrid: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
    },
    occasionItem: {
      textAlign: 'center',
      textDecoration: 'none',
      textDecoration: 'none',
    },
    occasionImage: {
      width: '200px',
      height: '200px',
      borderRadius: '50%',
      objectFit: 'cover',
      marginBottom: '10px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    occasionTitle: {
      fontSize: '16px',
      textDecoration: 'none',
      fontWeight: 'bold',
      color: '#2c3e50',
      fontFamily: 'Montserrat, sans-serif',
    },
    bestSellingContainer: {
      textAlign: 'center',
      padding: '40px 20px',
    },
    bestSellingTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '10px',
      color: '#2c3e50',
      fontFamily: 'Montserrat, sans-serif',
    },
    bestSellingSubtitle: {
      fontSize: '18px',
      color: '#7f8c8d',
      marginBottom: '30px',
      fontFamily: 'Montserrat, sans-serif',
    },
    bestSellingGrid: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
    },
    bestSellingItem: {
      textAlign: 'center',
      width: '200px',
      transition: 'transform 0.3s',
    },
    bestSellingItemHover: {
      transform: 'scale(1.05)',
    },
    bestSellingImage: {
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
    productPrice: {
      fontSize: '16px',
      color: '#2c3e50',
      fontFamily: 'Montserrat, sans-serif',
    },
    productDiscount: {
      textDecoration: 'line-through',
      color: '#e74c3c',
      marginLeft: '10px',
      fontFamily: 'Montserrat, sans-serif',
    },
    productRating: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '5px',
    },
    productStar: {
      color: '#ffcc00',
      marginRight: '5px',
    },
    serviceContainer: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: '#f4f4f4',
      padding: '40px 0',
    },
    serviceItem: {
      textAlign: 'center',
      width: '200px',
      fontFamily: 'Montserrat, sans-serif',
    },
    serviceIcon: {
      fontSize: '32px',
      color: '#ff69b4',
      marginBottom: '10px',
    },
    serviceTitle: {
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#2c3e50',
      fontFamily: 'Montserrat, sans-serif',
    },
    serviceDescription: {
      fontSize: '14px',
      color: '#7f8c8d',
      fontFamily: 'Montserrat, sans-serif',
    },
    footer: {
      backgroundColor: '#2c3e50',
      color: '#fff',
      padding: '40px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
    },
    footerColumn: {
      flex: '1',
      padding: '20px',
      minWidth: '250px',
      fontFamily: 'Montserrat, sans-serif',
    },
    footerLogo: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '20px',
    },
    footerLogoText: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#fff',
      marginLeft: '10px',
    },
    footerTitle: {
      fontSize: '18px',
      fontWeight: 'bold',
      marginBottom: '10px',
      fontFamily: 'Montserrat, sans-serif',
    },
    footerLink: {
      color: '#fff',
      textDecoration: 'none',
      display: 'block',
      marginBottom: '5px',
      fontFamily: 'Montserrat, sans-serif',
    },
    footerIcons: {
      display: 'flex',
      gap: '10px',
      marginTop: '10px',
    },
    footerIcon: {
      fontSize: '20px',
      color: '#fff',
    },
  };

  const bestSellingProducts = [
    {
      id: 1,
      image: 'image1.jpg', // replace with actual image path
      title: 'Bellina Purple Orchid Bouquet',
      price: '₹695',
      oldPrice: '₹999',
      discount: '31% OFF',
      rating: '4.9',
      reviews: '(609)',
      delivery: 'In 3 hours',
    },
    {
      id: 2,
      image: 'image2.jpg', // replace with actual image path
      title: '10 Red rose Bouquet',
      price: '₹495',
      rating: '4.9',
      reviews: '(195)',
      delivery: 'In 3 hours',
    },
    {
      id: 3,
      image: 'image3.jpg', // replace with actual image path
      title: 'Anthophile Love ',
      price: '₹755',
      delivery: '2-3 days',
    },
    {
      id: 4,
      image: 'image4.jpg', // replace with actual image path
      title: 'White Daisy ',
      price: '₹1200',
      rating: '5',
      reviews: '(1)',
      delivery: '2-3 days',
    },
    {
      id: 5,
      image: 'image5.jpg', // replace with actual image path
      title: 'Eternity White Roses Bouquet ',
      price: '₹1200',
      rating: '5',
      reviews: '(1)',
      delivery: '2-3 days',
    },
  
    
  ];

  return (
    <div>
      <header style={styles.header}>
        <div style={styles.logoContainer}>
          <GiFlowerPot size={40} style={styles.logo} />
          <div style={styles.siteName}>Petal Artistry</div>
        </div>
        <div style={styles.navLinks}>
          <Link to="/gift-finder" style={styles.navIcon} aria-label="Gift Finder">
            <FaGift size={20} />
          </Link>
          <Link to="/cart" style={styles.navIcon} aria-label="Cart">
            <FaShoppingCart size={20} />
          </Link>
          <Link to="/user-profile" style={styles.navIcon} aria-label="User Profile">
            <FaUser size={20} />
          </Link>
          <Link to="#" style={styles.navIcon} aria-label="Menu">
            <FaBars size={20} />
          </Link>
        </div>
      </header>
      
      <div style={styles.searchContainer}>
        <FaSearch style={styles.searchIcon} size={20} />
        <input
          type="text"
          placeholder="Search for flowers, cakes, gifts etc."
          style={styles.searchBar}
      
        />
      </div>
      <nav style={styles.categories}>
        <div
          style={styles.categoryLink}
          onMouseEnter={() => handleMouseEnter('flowers')}
          onMouseLeave={() => handleMouseLeave('flowers')}
        >
            Flowers
          {dropdown.flowers && (
            <div
              style={styles.dropdown}
              onMouseEnter={() => handleMouseEnter('flowers')}
              onMouseLeave={() => handleMouseLeave('flowers')}
            >
              <div style={styles.dropdownColumn}>
                <h4>Flowers</h4>
                <Link to="#" style={styles.dropdownItem}>Roses</Link>
                <Link to="#" style={styles.dropdownItem}>Lilies</Link>
                <Link to="#" style={styles.dropdownItem}>Orchids</Link>
                <Link to="#" style={styles.dropdownItem}>Mixed Flowers</Link>
                <Link to="#" style={styles.dropdownItem}>Carnations</Link>
                <Link to="#" style={styles.dropdownItem}>Tulips</Link>
                <Link to="#" style={styles.dropdownItem}>Exotic Flowers</Link>
              </div>
            </div>
          )}
        </div>
        <div
          style={styles.categoryLink}
          onMouseEnter={() => handleMouseEnter('combos')}
          onMouseLeave={() => handleMouseLeave('combos')}
        >
          Combos
          {dropdown.combos && (
            <div
              style={styles.dropdown}
              onMouseEnter={() => handleMouseEnter('combos')}
              onMouseLeave={() => handleMouseLeave('combos')}
            >
              <div style={styles.dropdownColumn}>
                <h4>Combos</h4>
                <Link to="#" style={styles.dropdownItem}>Flowers & Cake</Link>
                <Link to="#" style={styles.dropdownItem}>Flowers & Chocolates</Link>
                <Link to="#" style={styles.dropdownItem}>Flowers & Teddy</Link>
                <Link to="#" style={styles.dropdownItem}>Flowers & Sweets</Link>
                <Link to="#" style={styles.dropdownItem}>All Combos</Link>
              </div>
            </div>
          )}
        </div>
        <div
          style={styles.categoryLink}
          onMouseEnter={() => handleMouseEnter('anniversary')}
          onMouseLeave={() => handleMouseLeave('anniversary')}
        >
          Anniversary
          {dropdown.anniversary && (
            <div
              style={styles.dropdown}
              onMouseEnter={() => handleMouseEnter('anniversary')}
              onMouseLeave={() => handleMouseLeave('anniversary')}
            >
              <div style={styles.dropdownColumn}>
                <h4>Anniversary</h4>
                <Link to="#" style={styles.dropdownItem}>Roses</Link>
                <Link to="#" style={styles.dropdownItem}>Lilies</Link>
                <Link to="#" style={styles.dropdownItem}>Orchids</Link>
                <Link to="#" style={styles.dropdownItem}>Mixed Flowers</Link>
                <Link to="#" style={styles.dropdownItem}>Carnations</Link>
                <Link to="#" style={styles.dropdownItem}>Tulips</Link>
                <Link to="#" style={styles.dropdownItem}>Exotic Flowers</Link>
              </div>
            </div>
          )}
        </div>
        <div
          style={styles.categoryLink}
          onMouseEnter={() => handleMouseEnter('birthday')}
          onMouseLeave={() => handleMouseLeave('birthday')}
        >
          Birthday
          {dropdown.birthday && (
            <div
              style={styles.dropdown}
              onMouseEnter={() => handleMouseEnter('birthday')}
              onMouseLeave={() => handleMouseLeave('birthday')}
            >
              <div style={styles.dropdownColumn}>
                <h4>Birthday</h4>
                <Link to="#" style={styles.dropdownItem}>Roses</Link>
                <Link to="#" style={styles.dropdownItem}>Lilies</Link>
                <Link to="#" style={styles.dropdownItem}>Orchids</Link>
                <Link to="#" style={styles.dropdownItem}>Mixed Flowers</Link>
                <Link to="#" style={styles.dropdownItem}>Carnations</Link>
                <Link to="#" style={styles.dropdownItem}>Tulips</Link>
                <Link to="#" style={styles.dropdownItem}>Exotic Flowers</Link>
              </div>
            </div>
          )}
        </div>
        <div
          style={styles.categoryLink}
          onMouseEnter={() => handleMouseEnter('occasions')}
          onMouseLeave={() => handleMouseLeave('occasions')}
        >
          Occasions
          {dropdown.occasions && (
            <div
              style={styles.dropdown}
              onMouseEnter={() => handleMouseEnter('occasions')}
              onMouseLeave={() => handleMouseLeave('occasions')}
            >
              <div style={styles.dropdownColumn}>
                <h4>Occasions</h4>
                <Link to="#" style={styles.dropdownItem}>Mother's Day</Link>
                <Link to="#" style={styles.dropdownItem}>Father's Day</Link>
                <Link to="#" style={styles.dropdownItem}>Women's Day</Link>
                <Link to="#" style={styles.dropdownItem}>Valentine's Day</Link>
                <Link to="#" style={styles.dropdownItem}>Christmas</Link>
                <Link to="#" style={styles.dropdownItem}>Easter</Link>
                <Link to="#" style={styles.dropdownItem}>New Year</Link>
                <Link to="#" style={styles.dropdownItem}>All Occasions</Link>
              </div>
            </div>
          )}
        </div>
      </nav>
      <div style={styles.heroImageContainer}>
        <img src="hello.jpg" alt="hero" style={styles.heroImage} />
      </div>
      <div style={styles.shopByOccasionsContainer}>
        <h2 style={styles.shopByOccasionsTitle}>Shop By Occasions & Relations</h2>
        <p style={styles.shopByOccasionsSubtitle}>
          Surprise your loved ones with beautiful flowers
        </p>
        
        <div style={styles.occasionsGrid}>
          <div style={styles.occasionItem}>
            <Link to="/ValentineFlowersPage">
            <img src="birthday.jpg" alt="Birthday" style={styles.occasionImage} />
            <div style={styles.occasionTitle}>Valentine Flowers</div>
            </Link>
          </div>
          <div style={styles.occasionItem}>
            <Link to="/AnniversaryFlowersPage">
            <img src="anniversary.jpg" alt="Anniversary" style={styles.occasionImage} />
            <div style={styles.occasionTitle}>Anniversary Flowers</div>
            </Link>
          </div>
          <div style={styles.occasionItem}>
            <Link to="/FlowersForHim">
            <img src="forhim.jpg" alt="Congratulations" style={styles.occasionImage} />
            <div style={styles.occasionTitle}>Flowers for Him</div>
            </Link>
          </div>
          <div style={styles.occasionItem}>
            <Link to="/FlowersForHer">
            <img src="forher.jpg" alt="Get Well Soon" style={styles.occasionImage} />
            <div style={styles.occasionTitle}>Flowers for Her</div>
            </Link>
          </div>
        </div>
      </div>
      
      <div style={styles.bestSellingContainer}>
        <h2 style={styles.bestSellingTitle}>Best Selling Flowers & Gifts</h2>
        <p style={styles.bestSellingSubtitle}>Surprise Your Loved Ones</p>
        <div style={styles.bestSellingGrid}>
          {bestSellingProducts.map(product => (
            <Link to={`/flower-details/${product.id}`} key={product.id} style={{ textDecoration: 'none' }}>
              <div style={styles.bestSellingItem}
                   onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                   onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>

                <img src={product.image} alt={product.title} style={styles.bestSellingImage} />
                
                <div style={styles.productTitle}>{product.title}</div>
                <div style={styles.productPrice}>
                  {product.price} {product.oldPrice && <span style={styles.productDiscount}>{product.oldPrice} {product.discount}</span>}
                </div>
                {product.rating && (
                  <div style={styles.productRating}>
                    <FaStar color="#f1c40f" /> {product.rating} <span>({product.reviews})</span>
                  </div>
                )}
                <div style={styles.productDelivery}>Earliest Delivery: {product.delivery}</div>
              </div>
            </Link>
          ))}
        </div>
        
      </div>
      <footer style={styles.footer}>
        <div style={styles.footerSection}>
          <h4 style={styles.footerTitle}>Customer Service</h4>
          <p style={styles.footerLink}>Contact Us</p>
          <p style={styles.footerLink}>FAQs</p>
          <p style={styles.footerLink}>Shipping & Delivery</p>
          <p style={styles.footerLink}>Returns</p>
          <p style={styles.footerLink}>Order Tracking</p>
        </div>
        <div style={styles.footerSection}>
          <h4 style={styles.footerTitle}>About Us</h4>
          <p style={styles.footerLink}>Our Story</p>
          <p style={styles.footerLink}>Careers</p>
          <p style={styles.footerLink}>Press</p>
          <p style={styles.footerLink}>Blog</p>
        </div>
        <div style={styles.footerSection}>
          <h4 style={styles.footerTitle}>Follow Us</h4>
          <div style={styles.footerSocialIcons}>
            <FaFacebook style={styles.socialIcon} />
            <FaInstagram style={styles.socialIcon} />
            <FaTwitter style={styles.socialIcon} />
          </div>
          <p style={styles.footerEmail}>
            <FaEnvelope style={styles.emailIcon} />
            support@petalartistry.com
          </p>
          <p style={styles.footerPhone}>
            <FaPhone style={styles.phoneIcon} />
            +1 234 567 890
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;