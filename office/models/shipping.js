module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('shipping', {
    'shipping_id': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'shipping_type': {
      type: DataTypes.STRING,
    },
    'shipping_cost': {
      type: DataTypes.DOUBLE,
    },
    'shipping_region_id': {
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: 'shipping',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

