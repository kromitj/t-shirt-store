module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('core_store', {
    'key': {
      type: DataTypes.STRING,
    },
    'value': {
      type: DataTypes.STRING,
    },
    'type': {
      type: DataTypes.STRING,
    },
    'environment': {
      type: DataTypes.STRING,
    },
    'tag': {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'core_store',
    
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

