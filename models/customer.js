'use strict';
const models  = require('../models');
const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  var Customer = sequelize.define('Customer', {
  customer_id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,    
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  credit_card: {
    type: DataTypes.TEXT,
  },
  address_1: {
    type: DataTypes.STRING,
  },
  address_2: {
    type: DataTypes.STRING,
  },
  city: {
    type: DataTypes.STRING,
  },
  region: {
    type: DataTypes.STRING,
  },
  postal_code: {
    type: DataTypes.STRING,
  },
  country: {
    type: DataTypes.STRING,
  },
  shipping_region_id: {
    type: DataTypes.INTEGER,
    // allowNull: false,
    defaultValue: 1
  },
  day_phone: {
    type: DataTypes.STRING,
  },
  eve_phone: {
    type: DataTypes.STRING,
  },
  mob_phone: {
    type: DataTypes.STRING,
  },
}, {tableName: 'customer', timestamps: false},
);

  Customer.associate = function(models) {
    
  };

  return Customer;
};