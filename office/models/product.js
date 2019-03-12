module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('product', {
    'product_id': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'name': {
      type: DataTypes.STRING,
    },
    'description': {
      type: DataTypes.STRING,
    },
    'price': {
      type: DataTypes.DOUBLE,
    },
    'discounted_price': {
      type: DataTypes.DOUBLE,
    },
    'image': {
      type: DataTypes.STRING,
    },
    'image_2': {
      type: DataTypes.STRING,
    },
    'thumbnail': {
      type: DataTypes.STRING,
    },
    'display': {
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: 'product',
    underscored: true,
    timestamps: false    
    
  });

  Product.associate = (models) => {
    Product.hasMany(models.product_category, {foreignKey: 'product_id'})
    Product.hasMany(models.product_attribute, {foreignKey: 'product_id', hooks: true})
  };

  return Product;
};

