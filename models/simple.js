'use strict';
const sequelize = require('sequelize');


const model = (sequelize, DataTypes) => {
  const Simple = sequelize.define('Simple', {
    name: DataTypes.STRING,
    email: DataTypes.STRING
  })
  return Simple
}
module.exports = model