module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('users-permissions_permission', {
    'type': {
      type: DataTypes.STRING,
    },
    'controller': {
      type: DataTypes.STRING,
    },
    'action': {
      type: DataTypes.STRING,
    },
    'enabled': {
      type: DataTypes.INTEGER,
    },
    'policy': {
      type: DataTypes.STRING,
    },
    'role': {
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: 'users-permissions_permission',
    
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

