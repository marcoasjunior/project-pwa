module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    idevent: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: DataTypes.STRING,
    iduser: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User', // 'persons' refers to table name
        key: 'iduser', // 'id' refers to column name in persons table
      }
    },
    local: DataTypes.STRING,
    picture: DataTypes.BLOB,
    edate: DataTypes.DATE,
    adress: DataTypes.STRING,
  }, {
    freezeTableName: true
  });

  Event.associate = function (models) {
    Event.belongsTo(models.User, {
      foreignKey: 'iduser',
      foreignKeyConstraint: true
    });
    Event.belongsToMany(models.Preference, {
      through: 'Event_preference'
    });
  };

  return Event;
}