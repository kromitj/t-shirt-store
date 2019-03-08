module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('product_category', {
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

  Model.associate = (models) => {
  };

  return Model;
};

