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

      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE}

    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('Preference');
  }
};