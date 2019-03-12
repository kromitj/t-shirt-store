module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('product_attribute', {
    'product_id': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'attribute_value_id': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
  }, {
    tableName: 'product_attribute',
    underscored: true,
    timestamps: false    
  });

  Model.associate = (models) => {
    Model.belongsTo(models.product, {foreignKey: 'product_id'})
    Model.belongsTo(models.attribute_value, {foreignKey: 'attribute_value_id'})
  };

  return Model;
};

