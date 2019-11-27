module.exports = (sequelize, DataTypes) => {
    const User_preference = sequelize.define('User_preference', {
        // iduser_pref: {
        //     type: DataTypes.INTEGER,
        //     primaryKey: true
        // },
        
    }, {
        freezeTableName: true,
        timestamps: false
    });

    return User_preference;
};