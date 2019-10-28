module.exports = {
  up: function (queryInterface, DataTypes) {
    return queryInterface.createTable('User_preference', {
      iduser_pref: {
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
      iduser: {
        type: DataTypes.INTEGER,
        references: {
          model: 'User',
          key: 'iduser'
        }
      },
    });
  },
  down: function (queryInterface, DataTypes) {
    return queryInterface.dropTable('User_preference');
  }
};