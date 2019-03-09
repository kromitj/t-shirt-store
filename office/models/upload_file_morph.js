module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('upload_file_morph', {
    'upload_file_id': {
      type: DataTypes.INTEGER,
    },
    'related_id': {
      type: DataTypes.INTEGER,
    },
    'related_type': {
      type: DataTypes.STRING,
    },
    'field': {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'upload_file_morph',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

