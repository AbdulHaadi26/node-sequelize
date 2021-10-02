module.exports = function (db) {
    /*
    Alternative Way

     db.User.belongsTo(db.Company, {
        foreignKey: 'companyId',
        targetKey: 'id',
        as: 'company'
    });
    */
    db.User.belongsTo(db.Company);
};
