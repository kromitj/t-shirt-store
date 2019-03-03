'use strict';

const sequelize = require('sequelize');
const models  = require('../models');

module.exports = (sequelize, DataTypes) => {
  var ProductAttribute = sequelize.define('ProductAttribute', {
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
  attribute_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
   references: {
     // This is a reference to another model
     model: models.Attribute,
     // This is the column name of the referenced model
     key: 'attribute_id',
   }
  },
}, {tableName: 'product_attribute', timestamps: false},
);

  ProductAttribute.associate = function(models) {
  };

  return ProductAttribute;
};