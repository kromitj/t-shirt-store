'use strict';
const models  = require('../models');
const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  var ShoppingCart = sequelize.define('ShoppingCart', {
  item_id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "attributes"
  },
  quantity: {
    type: DataTypes.INTEGER,
     allowNull: false,
  },
  buy_now: {
    type: DataTypes.BOOLEAN,
     allowNull: false,
     defaultValue: true
  },
  added_on: {
    type: DataTypes.DATE,
     allowNull: false,
     defaultValue: DataTypes.NOW
  },
  cart_id: {
   type: DataTypes.STRING,
   allowNull: false,
 },
 product_id: {
   type: DataTypes.INTEGER,
   allowNull: false,
 }
}, {tableName: 'shopping_cart', timestamps: false},
);

  ShoppingCart.associate = function(models) {
    ShoppingCart.hasOne(models.Product, {foreignKey: 'product_id'})
  };

  return ShoppingCart;
};