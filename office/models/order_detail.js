module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('order_detail', {
    'item_id': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'order_id': {
      type: DataTypes.INTEGER,
    },
    'product_id': {
      type: DataTypes.INTEGER,
    },
    'attributes': {
      type: DataTypes.STRING,
    },
    'product_name': {
      type: DataTypes.STRING,
    },
    'quantity': {
      type: DataTypes.INTEGER,
    },
    'unit_cost': {
      type: DataTypes.DOUBLE,
    },
  }, {
    tableName: 'order_detail',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

