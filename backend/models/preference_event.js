module.exports = (sequelize, DataTypes) => {
    const Event_preference = sequelize.define('Event_preference', {

        
    }, {
        freezeTableName: true,
        timestamps: false
    });

    return Event_preference;
};