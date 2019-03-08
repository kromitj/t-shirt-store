module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('upload_file', {
    'name': {
      type: DataTypes.STRING,
    },
    'hash': {
      type: DataTypes.STRING,
    },
    'sha256': {
      type: DataTypes.STRING,
    },
    'ext': {
      type: DataTypes.STRING,
    },
    'mime': {
      type: DataTypes.STRING,
    },
    'size': {
      type: DataTypes.STRING,
    },
    'url': {
      type: DataTypes.STRING,
    },
    'provider': {
      type: DataTypes.STRING,
    },
    'public_id': {
      type: DataTypes.STRING,
    },
    'created_at': {
      type: DataTypes.DATE,
    },
    'updated_at': {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'upload_file',
    underscored: true,
    
    
  });

  Model.associate = (models) => {
  };

  return Model;
};

