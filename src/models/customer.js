const Sequelize = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('customer', {
  Name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  no_of_purchases: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
    },
  },
});

module.exports = customer;