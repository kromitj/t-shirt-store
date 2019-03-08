module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('shipping_region', {
    'shipping_region_id': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'shipping_region': {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'shipping_region',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

