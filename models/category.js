'use strict';
const models  = require('../models');
const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  var Category = sequelize.define('Category', {
  category_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.STRING
  },
  department_id: {
   type: DataTypes.INTEGER,
   references: {
     // This is a reference to another model
     model: models.Department,
     // This is the column name of the referenced model
     key: 'department_id',
   }
 }
}, {tableName: 'category', timestamps: false},
);

  Category.associate = function(models) {
  };

  return Category;
};