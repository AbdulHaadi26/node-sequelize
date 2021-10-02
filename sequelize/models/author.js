module.exports = (sequelize, DataTypes) => {
    const Author = sequelize.define("author", {
        name: {
            type: DataTypes.STRING
        },

        /*
        If you want to add custom id.
        bookId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'book',
                key: "ID"
            },
            allowNull: false
        },
        */
    });

    return Author;
};