'use strict';
const sequelize = require('sequelize');
const models  = require('../models');
    // need to figure out how this shopping cart functions
    // does a cart model/table need to be created

module.exports = (sequelize, DataTypes) => {
  var ShoppingCart = sequelize.define('ShoppingCart', {
  item_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,    
   },
  cart_id: {
    type: DataTypes.STRING,
    allowNull: false,
    // need to put a referance to a to-be created Cart table/model
  },
  product_id: {
    type: DataTypes.INTEGER,
    references: {
      // This is a reference to another model
      model: models.Product,
       // This is the column name of the referenced model
       key: 'product_id',
    }
  },
  attributes: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  buy_now: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    // why is default value true that seams weird
    defaultValue: true,
  },
}, {tableName: 'shopping_cart', timestamps: false},
);

  ShoppingCart.associate = function(models) {
  };

  return ShoppingCart;
};