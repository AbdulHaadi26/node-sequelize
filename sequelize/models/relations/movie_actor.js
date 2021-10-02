module.exports = function (db) {
    db.Movie.belongsToMany(db.Actor, { through: 'ActorMovies' });
    db.Actor.belongsToMany(db.Movie, { through: 'ActorMovies' });
}