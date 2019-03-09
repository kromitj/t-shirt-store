module.exports = (sequelize, DataTypes) => {
  const ProductCategory = sequelize.define('product_category', {
    'product_id': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'category_id': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'created_at': {
      type: DataTypes.DATE,
    },
    'updated_at': {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'product_category',
    underscored: true,
    
    
  });

  ProductCategory.associate = (models) => {
    ProductCategory.belongsTo(models.product, {foreignKey: 'product_id'})
    ProductCategory.belongsTo(models.category, {foreignKey: 'category_id'})

  };

  return ProductCategory;
};

