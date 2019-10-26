module.exports = (sequelize, DataTypes) => {
    const Event_preference = sequelize.define('User_preference', {
        iduser_pref: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        idpref: DataTypes.INTEGER,
        iduser: DataTypes.INTEGER,
    }, {
        freezeTableName: true
    });

    return Event_preference;
};