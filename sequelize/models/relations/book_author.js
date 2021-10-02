module.exports = function (db) {
    db.Book.hasOne(db.Author);
    db.Author.belongsTo(db.Book);
};
