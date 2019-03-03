'use strict';

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  var Product = sequelize.define('Product', {
  product_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.STRING
  },
  price: {
    type: DataTypes.DECIMAL(10, 2) 
  },
  discounted_price: {
    type: DataTypes.DECIMAL(10, 2) 
  },
  image: {
    type: DataTypes.STRING
  },
  image_2: {
    type: DataTypes.STRING
  },
  thumbnail: {
    type: DataTypes.STRING
  },
  display: {
    type: DataTypes.INTEGER
  },
}, {tableName: 'product', timestamps: false},
);

  Product.associate = function(models) {
  };

  return Product;
};