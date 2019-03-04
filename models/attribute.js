'use strict';
const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  var Attribute = sequelize.define('Attribute', {
  attribute_id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {tableName: 'attribute', timestamps: false},
);

  Attribute.associate = function(models) {
    Attribute.hasMany(models.AttributeValue, {foreignKey: 'attribute_id'})
  };

  return Attribute;
};