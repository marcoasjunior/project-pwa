module.exports = (sequelize, DataTypes) => {
    const Event = sequelize.define('Event', {
      name: DataTypes.STRING,
      iduser: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      local: DataTypes.STRING,
      picture: DataTypes.BLOB,
      edate: DataTypes.DATE,
      adress: DataTypes.STRING,
    });
  
    Event.associate = function(models) {
        Event.belongsTo(models.User);
        Event.belongsToMany(models.Preference, { through: 'Event_preference', as: 'preference' });
      };


    return Event;
  }
