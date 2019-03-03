'use strict';
const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  var Attribute = sequelize.define('Attribute', {
  attribute_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING
  },
}, {tableName: 'attribute', timestamps: false},
);

  Attribute.associate = function(models) {
  };

  return Attribute;
};