module.exports = (sequelize, DataTypes) => {
    const Actor = sequelize.define('Actor', { name: DataTypes.STRING });
    return Actor;
}
