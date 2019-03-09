module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('category', {
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

  Category.associate = (models) => {
    Category.belongsTo(models.department, {foreignKey: 'department_id'})
    Category.hasMany(models.product_category, {foreignKey: 'category_id'})
  };

  return Category;
};

