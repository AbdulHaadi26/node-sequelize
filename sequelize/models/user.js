module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("user", {
        name: {
            type: DataTypes.STRING
        },

        /*
        If you want to add custom id.
        companyId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'company',
                key: "ID"
            },
            allowNull: false
        },
        */
    });

    return User;
};