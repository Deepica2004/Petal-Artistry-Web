import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import OrderFlowers from './pages/OrderFlowers';
import GiftFinder from './pages/GiftFinder';  
import Cart from './pages/Cart';  
import UserProfile from './pages/UserProfile';  
import FlowerDetailsPage from './pages/FlowerDetailsPage';
import CategoryPage from './pages/CategoryPage';
import ValentineFlowersPage from './pages/ValentineFlowersPage';
import AnniversaryFlowersPage from './pages/AnniversaryFlowersPage.jsx';
import FlowersForHimPage from './pages/FlowersForHimPage';
import FlowersForHerPage from './pages/FlowersForHerPage'; 

// Import CategoryPage

function App() {
  const categories = [
    { id: 1, title: 'Roses', products: [{ id: 1, image: 'rose.jpg', title: 'Red Rose Bouquet' }, /* More products */] },
    { id: 2, title: 'Lilies', products: [{ id: 2, image: 'lily.jpg', title: 'White Lily Bouquet' }, /* More products */] },
    // Add more categories as needed
  ];

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ValentineFlowersPage" element={<ValentineFlowersPage />} />
        <Route path="/AnniversaryFlowersPage" element={<AnniversaryFlowersPage />} />
        <Route path="/FlowersForHim" element={<FlowersForHimPage />} />
        <Route path="/FlowersForHer" element={<FlowersForHerPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/order-flowers" element={<OrderFlowers />} />
        <Route path="/gift-finder" element={<GiftFinder />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/flower-details/:id" element={<FlowerDetailsPage />} />
        {categories.map(category => (
          <Route
            key={category.id}
            path={`/category/${category.title.toLowerCase()}`}
            element={<CategoryPage title={category.title} products={category.products} />}
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
