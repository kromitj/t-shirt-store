module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('users-permissions_user', {
    'username': {
      type: DataTypes.STRING,
    },
    'email': {
      type: DataTypes.STRING,
    },
    'provider': {
      type: DataTypes.STRING,
    },
    'password': {
      type: DataTypes.STRING,
    },
    'resetPasswordToken': {
      type: DataTypes.STRING,
    },
    'confirmed': {
      type: DataTypes.INTEGER,
    },
    'blocked': {
      type: DataTypes.INTEGER,
    },
    'role': {
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: 'users-permissions_user',
    
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

