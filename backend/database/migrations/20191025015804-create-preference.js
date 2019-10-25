module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Preference', {
      idpref: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      preference: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('Preference');
  }
};