module.exports = (sequelize, DataTypes) => {
  const AttributeValue = sequelize.define('attribute_value', {
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

  AttributeValue.associate = (models) => {
    AttributeValue.belongsTo(models.attribute, {foreignKey: 'attribute_id',  onDelete: 'cascade' })
    AttributeValue.hasMany(models.product_attribute, {foreignKey: 'attribute_value_id',   onDelete: 'cascade' , hooks: true})
  };

  return AttributeValue;
};

