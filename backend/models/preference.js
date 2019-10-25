module.exports = (sequelize, DataTypes) => {
    const Preference = sequelize.define('Preference', {
      preference: DataTypes.STRING

    });
  
    Preference.associate = function(models) {
        Preference.belongsToMany(models.Event, { through: 'Event_preference', as: 'event' });
      };


    return Preference;
  }