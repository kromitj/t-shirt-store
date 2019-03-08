module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('attribute_value', {
    'attribute_value_id': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'attribute_id': {
      type: DataTypes.INTEGER,
    },
    'value': {
      type: DataTypes.STRING,
    },
    'created_at': {
      type: DataTypes.DATE,
    },
    'updated_at': {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'attribute_value',
    underscored: true,
    
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

