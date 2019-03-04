'use strict';
const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  var Department = sequelize.define('Department', {
  department_id: {
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
    type: DataTypes.STRING
  },
}, {tableName: 'department', timestamps: false},
);

  Department.associate = function(models) {
  };

  return Department;
};