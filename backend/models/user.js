module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    password: DataTypes.STRING,
    picture: DataTypes.BLOB
  }, {
    freezeTableName: true
  });

  User.associate = function (models) {
    User.hasMany(models.Event);
  };

  return User;
}