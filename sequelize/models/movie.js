module.exports = (sequelize, DataTypes) => {
    const Movie = sequelize.define('Movie', { name: DataTypes.STRING });
    return Movie;
}