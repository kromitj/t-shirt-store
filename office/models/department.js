module.exports = (sequelize, DataTypes) => {
  const Department = sequelize.define('department', {
    'department_id': {
      type: DataTypes.INTEGER,
      primaryKey: true 
    },
    'name': {
      type: DataTypes.STRING,
    },
    'description': {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'department',
    underscored: true,
    timestamps: false,
    
  });

  Department.associate = (models) => {
    Department.hasMany(models.category, {foreignKey: 'department_id'})
  };

  return Department;
};

