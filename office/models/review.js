module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('review', {
    'review_id': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'customer_id': {
      type: DataTypes.INTEGER,
    },
    'product_id': {
      type: DataTypes.INTEGER,
    },
    'review': {
      type: DataTypes.STRING,
    },
    'rating': {
      type: DataTypes.INTEGER,
    },
    'created_on': {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'review',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

