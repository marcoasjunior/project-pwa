module.exports = {
  up: function(queryInterface, DataTypes) {
    return queryInterface.createTable('Event_preference', {
      idevent_pref: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      idpref: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Preference',
          key: 'idpref'
        }
      },
      idevent: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Event',
          key: 'idevent'
        }
      },     
    });
  },
  down: function(queryInterface, DataTypes) {
    return queryInterface.dropTable('event_preference');
  }
};