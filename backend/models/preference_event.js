module.exports = (sequelize, DataTypes) => {
    const Event_preference = sequelize.define('Event_preference', {
        // idevent_pref: {
        //     type: DataTypes.INTEGER,
        //     primaryKey: true
        // },
        
    }, {
        freezeTableName: true,
        timestamps: false
    });

    return Event_preference;
};