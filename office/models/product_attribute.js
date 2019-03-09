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
    'updated_at': {
      type: DataTypes.DATE,
    },
    'created_at': {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'product_attribute',
    underscored: true,
    
    
  });

  Model.associate = (models) => {
    Model.belongsTo(models.product, {foreignKey: 'product_id'})
    Model.belongsTo(models.attribute_value, {foreignKey: 'attribute_value_id'})
  };

  return Model;
};

