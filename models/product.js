'use strict';

const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  var Product = sequelize.define('Product', {
  product_id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,

  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.DECIMAL(10, 2) ,
    allowNull: false
  },
  discounted_price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    defaultValue: 0.00
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
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
}, {tableName: 'product', timestamps: false},
);

  Product.associate = function(models) {
    Product.belongsToMany(models.AttributeValue, { through: 'ProductAttribute', foreignKey: 'product_id', otherKey: 'attribubte_value_id'})
    Product.belongsTo(models.Category, { through: 'ProductCategory', foreignKey: 'product_id', otherKey: 'category_id'})
    Product.belongsTo(models.Department, { through: 'ProductCategory', foreignKey: 'product_id', otherKey: 'category_id'})
  };
    

  return Product;
};