module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    
    name: DataTypes.STRING,
    local: DataTypes.STRING,
    picture: DataTypes.BLOB,
    edate: DataTypes.DATE,
    address: DataTypes.STRING,
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