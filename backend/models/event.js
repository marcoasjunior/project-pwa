module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    
    name: DataTypes.STRING,
    local: DataTypes.STRING,
    address: DataTypes.STRING,
    latitude: DataTypes.DECIMAL(10,7),
    longitude: DataTypes.DECIMAL(10, 7),
    picture: DataTypes.STRING,
    edate: DataTypes.DATE,


  }, {
    freezeTableName: true
  });

  Event.associate = function (models) {
    Event.belongsTo(models.User);
    Event.belongsToMany(models.Preference, {
      through: 'Event_preference'
    });
  };

  return Event;
}