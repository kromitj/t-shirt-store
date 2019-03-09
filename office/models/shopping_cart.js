module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('shopping_cart', {
    'item_id': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'cart_id': {
      type: DataTypes.STRING,
    },
    'product_id': {
      type: DataTypes.INTEGER,
    },
    'attributes': {
      type: DataTypes.STRING,
    },
    'quantity': {
      type: DataTypes.INTEGER,
    },
    'buy_now': {
      type: DataTypes.INTEGER,
    },
    'added_on': {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'shopping_cart',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

