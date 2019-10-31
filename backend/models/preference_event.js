module.exports = (sequelize, DataTypes) => {
    const Event_preference = sequelize.define('Event_preference', {
        idevent_pref: {
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
        idevent: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Event', // 'persons' refers to table name
                key: 'idevent', // 'id' refers to column name in persons table
            }
        },
    }, {
        freezeTableName: true
    }, {
        timestamps: false
    });

    return Event_preference;
};