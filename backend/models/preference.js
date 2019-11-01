module.exports = (sequelize, DataTypes) => {
  const Preference = sequelize.define('Preference', {
   
    preference: DataTypes.STRING,
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }


  }, {
    freezeTableName: true
  });

  Preference.associate = function (models) {
    Preference.belongsToMany(models.Event, {
      through: 'Event_preference',
    })
    Preference.belongsToMany(models.User, {
      through: 'User_preference',
    });
  };


  return Preference;
}