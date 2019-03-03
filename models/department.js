'use strict';
const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  var Department = sequelize.define('Department', {
  department_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING
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