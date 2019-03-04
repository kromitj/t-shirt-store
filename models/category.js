'use strict';
const models  = require('../models');
const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  var Category = sequelize.define('Category', {
  category_id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
  department_id: {
   type: DataTypes.INTEGER,
   allowNull: false,
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
    Category.belongsToMany(models.Product, {through: 'ProductCategory', foreignKey: 'category_id', otherKey: 'product_id'})
  };

  return Category;
};