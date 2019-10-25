module.exports = (sequelize, DataTypes) => {
    const Event_preference = sequelize.define('Event_preference', {
        idevent_pref: DataTypes.INTEGER,
        idpref: DataTypes.INTEGER,
        idevent: DataTypes.INTEGER,
    });
  
    return Event_preference;
  };