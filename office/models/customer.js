module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('customer', {
    'customer_id': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'name': {
      type: DataTypes.STRING,
    },
    'email': {
      type: DataTypes.STRING,
    },
    'password': {
      type: DataTypes.STRING,
    },
    'credit_card': {
      type: DataTypes.STRING,
    },
    'address_1': {
      type: DataTypes.STRING,
    },
    'address_2': {
      type: DataTypes.STRING,
    },
    'city': {
      type: DataTypes.STRING,
    },
    'region': {
      type: DataTypes.STRING,
    },
    'postal_code': {
      type: DataTypes.STRING,
    },
    'country': {
      type: DataTypes.STRING,
    },
    'shipping_region_id': {
      type: DataTypes.INTEGER,
    },
    'day_phone': {
      type: DataTypes.STRING,
    },
    'eve_phone': {
      type: DataTypes.STRING,
    },
    'mob_phone': {
      type: DataTypes.STRING,
    },
    'created_at': {
      type: DataTypes.DATE,
    },
    'shipping_region': {
      type: DataTypes.INTEGER,
    },
    'updated_at': {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'customer',
    underscored: true,
    
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

