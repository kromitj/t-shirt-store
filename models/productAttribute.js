'use strict';

const sequelize = require('sequelize');
const models  = require('../models');

module.exports = (sequelize, DataTypes) => {
  var ProductAttribute = sequelize.define('ProductAttribute', {
  product_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,    
  },
  attribute_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,   
  },
}, {tableName: 'product_attribute', timestamps: false},
);

  ProductAttribute.associate = function(models) {
  };

  return ProductAttribute;
};