
module.exports = (sequelize, DataTypes) => {
  const Attribute = sequelize.define('attribute', {
  attribute_id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {tableName: 'attribute', timestamps: false},
);

  Attribute.associate = function(models) {
    Attribute.hasMany(models.attribute_value, {foreignKey: 'attribute_id'})
  };

  return Attribute;
};