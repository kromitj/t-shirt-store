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
  }, {
    tableName: 'product_category',
    underscored: true,
    timestamps: false 
    
  });

  ProductCategory.associate = (models) => {
    ProductCategory.belongsTo(models.product, {foreignKey: 'product_id'})
    ProductCategory.belongsTo(models.category, {foreignKey: 'category_id'})

  };

  return ProductCategory;
};

