module.exports = function (db) {
    db.Tutorial.hasMany(db.Comment);
    db.Comment.belongsTo(db.Tutorial);
};
