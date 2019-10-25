module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Event', {
      idevent: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      iduser: {
        type: DataTypes.INTEGER,
        references: {
          model: 'User',
          key: 'iduser'
        }},
      local: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      picture: {
        allowNull: false,
        type: DataTypes.BLOB,
      },
      edate: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      adress: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    })
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('Event');
  }
};