module.exports = (sequelize, DataTypes) => {
    const User_preference = sequelize.define('User_preference', {
        iduser_pref: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        idpref: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Preference', // 'persons' refers to table name
                key: 'idpref', // 'id' refers to column name in persons table
            }
        },
        iduser: {
            type: DataTypes.INTEGER,
            references: {
                model: 'User', // 'persons' refers to table name
                key: 'iduser', // 'id' refers to column name in persons table
            }
        },
    }, {
        freezeTableName: true
    }, {
        timestamps: false
    });

    return User_preference;
};