module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('tax', {
    'tax_id': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'tax_type': {
      type: DataTypes.STRING,
    },
    'tax_percentage': {
      type: DataTypes.DOUBLE,
    },
  }, {
    tableName: 'tax',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

