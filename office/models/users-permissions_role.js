module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('users-permissions_role', {
    'name': {
      type: DataTypes.STRING,
    },
    'description': {
      type: DataTypes.STRING,
    },
    'type': {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'users-permissions_role',
    
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

