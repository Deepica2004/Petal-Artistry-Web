// models/Product.js

const { DataTypes } = require('sequelize');
const { sequelize } = require('../database'); // Import the sequelize instance from the database module

const Product = sequelize.define('Product', {
  // Define the schema for the Product model
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  // Add more fields as needed
});

module.exports = Product;
