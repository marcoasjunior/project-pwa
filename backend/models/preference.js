module.exports = (sequelize, DataTypes) => {
  const Preference = sequelize.define('Preference', {
    idpreference: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    preference: DataTypes.STRING


  }, {
    freezeTableName: true
  },
  {
    timestamps: false
  });

  Preference.associate = function (models) {
    Preference.belongsToMany(models.Event, {
      through: 'Event_preference',
      as: 'event'
    });
  };


  return Preference;
}