module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('department', {
    'department_id': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'name': {
      type: DataTypes.STRING,
    },
    'description': {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'department',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

