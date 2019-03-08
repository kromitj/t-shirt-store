module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('category', {
    'category_id': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'department_id': {
      type: DataTypes.INTEGER,
    },
    'name': {
      type: DataTypes.STRING,
    },
    'description': {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'category',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

