module.exports = (sequelize, DataTypes) => {
    const Items = sequelize.define('Items', {
        name: DataTypes.STRING,
        price: DataTypes.DOUBLE,
        type: DataTypes.STRING
    });
    return Items;
}
