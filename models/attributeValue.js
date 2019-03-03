'use strict';
const sequelize = require('sequelize');
const models  = require('../models');

module.exports = (sequelize, DataTypes) => {
  var AttributeValue = sequelize.define('AttributeValue', {
  attribute_value_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  value: {
    type: DataTypes.STRING
  },
  attribute_id: {
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
  };

  return AttributeValue;
};