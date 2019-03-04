'use strict';
const sequelize = require('sequelize');
const models  = require('../models');

module.exports = (sequelize, DataTypes) => {
  var AttributeValue = sequelize.define('AttributeValue', {
  attribute_value_id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  value: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  attribute_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
   references: {
     // This is a reference to another model
     model: models.Attribute,
     // This is the column name of the referenced model
     key: 'attribute_id',
   }
  },
}, {tableName: 'attribute_value', timestamps: false},
);

  AttributeValue.associate = function(models) {
    AttributeValue.hasOne(models.Attribute, {foreignKey: 'attribute_id'})
    AttributeValue.belongsToMany(models.Product, {through: 'ProductAttribute', foreignKey: 'attribute_value_id', otherKey: 'product_id'})

  };

  return AttributeValue;
};