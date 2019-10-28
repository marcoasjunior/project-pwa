module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {

    iduser: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    password: DataTypes.STRING,
  }, {
    freezeTableName: true
  });

  User.associate = function (models) {
    User.hasMany(models.Event);
  };

  return User;
}