// routes/users.js

const express = require('express');
const router = express.Router();

// Define routes for users

// Example route
router.get('/', (req, res) => {
  res.send('This is the users route');
});

module.exports = router;
