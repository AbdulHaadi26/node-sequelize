
module.exports = (sequelize, Sequelize) => {

    const Foo = sequelize.define('foo', {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: Sequelize.STRING(300)
    });

    return Foo;
}