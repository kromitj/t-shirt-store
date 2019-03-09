module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('audit', {
    'audit_id': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'order_id': {
      type: DataTypes.INTEGER,
    },
    'created_on': {
      type: DataTypes.DATE,
    },
    'message': {
      type: DataTypes.STRING,
    },
    'code': {
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: 'audit',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

