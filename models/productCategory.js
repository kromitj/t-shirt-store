'use strict';
const sequelize = require('sequelize');
const models  = require('../models');

module.exports = (sequelize, DataTypes) => {
  var ProductCategory = sequelize.define('ProductCategory', {
  category_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
     // This is a reference to another model
     model: models.Category,
     // This is the column name of the referenced model
     key: 'category_id',
   }
  },
  product_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
   references: {
     // This is a reference to another model
     model: models.Product,
     // This is the column name of the referenced model
     key: 'product_id',
   }
  },
}, {tableName: 'category', timestamps: false},
);

  ProductCategory.associate = function(models) {
  };

  return ProductCategory;
};