module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('product', {
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
    'created_at': {
      type: DataTypes.DATE,
    },
    'updated_at': {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'product',
    underscored: true,
    
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

