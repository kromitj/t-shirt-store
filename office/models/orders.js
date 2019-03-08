module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('orders', {
    'order_id': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'total_amount': {
      type: DataTypes.DOUBLE,
    },
    'created_on': {
      type: DataTypes.DATE,
    },
    'shipped_on': {
      type: DataTypes.DATE,
    },
    'status': {
      type: DataTypes.INTEGER,
    },
    'comments': {
      type: DataTypes.STRING,
    },
    'customer_id': {
      type: DataTypes.INTEGER,
    },
    'auth_code': {
      type: DataTypes.STRING,
    },
    'reference': {
      type: DataTypes.STRING,
    },
    'shipping_id': {
      type: DataTypes.INTEGER,
    },
    'tax_id': {
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: 'orders',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

