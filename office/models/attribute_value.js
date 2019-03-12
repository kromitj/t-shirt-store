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
    }
  }, {
    tableName: 'attribute_value',
    underscored: true,
    timestamps: false 
    
  });

  AttributeValue.associate = (models) => {
    AttributeValue.belongsTo(models.attribute, {foreignKey: 'attribute_id',  onDelete: 'cascade' })
    AttributeValue.hasMany(models.product_attribute, {foreignKey: 'attribute_value_id',   onDelete: 'cascade' , hooks: true})
  };

  return AttributeValue;
};

