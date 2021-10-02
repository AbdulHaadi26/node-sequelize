module.exports = (sequelize, DataTypes) => {
    const Company = sequelize.define("company", {
        name: {
            type: DataTypes.STRING
        }
    });

    return Company;
};