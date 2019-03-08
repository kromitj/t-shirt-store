module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('attribute', {
    attribute_id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
    'created_at': {
      type: DataTypes.DATE,
    },
    'updated_at': {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'attribute',
    underscored: true,
    
    
  });

  Model.associate = (models) => {
    
  };

  return Model;
};

