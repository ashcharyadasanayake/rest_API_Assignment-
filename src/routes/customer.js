// src/routes/customer.js

const express = require('express');
const router = express.Router();
const customer = require('../models/user');

// Create a new customer
router.post('/', async (req, res) => {
  try {
    const customer = await User.create(req.body);
    res.json(customer);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create user.' });
  }
});

// Get all customer
router.get('/', async (req, res) => {
  try {
    const customer = await User.findAll();
    res.json(customer);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch users.' });
  }
});
// Get customer by ID
router.get('/:id', async (req, res) => {
    try {
      const customer = await customer.findByPk(req.params.id);
      if (!customer) {
        res.status(404).json({ message: 'User not found.' });
      } else {
        res.json(customer);
      }
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch user.' });
    }
  });
  
  // Update customer by ID
  router.put('/:id', async (req, res) => {
    try {
      const [updatedRowsCount] = await customer.update(req.body, {
          where: { id: req.params.id }
      });      
      if (updatedRowsCount === 0) {
        res.status(404).json({ message: 'User not found.' });
      } else {
        const customer = await User.findByPk(req.params.id);
        res.json(user);
      }
    } catch (error) {
      res.status(500).json({ message: 'Failed to update user.' });
    }
  });
  // Delete user by ID
router.delete('/:id', async (req, res) => {
    try {
      const deletedRowsCount = await customer.destroy({ where: { id: req.params.id } });
      if (deletedRowsCount === 0) {
        res.status(404).json({ message: 'User not found.' });
      } else {
        res.json({ message: 'User deleted successfully.' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Failed to delete user.' });
    }
  });
  
  module.exports = router;