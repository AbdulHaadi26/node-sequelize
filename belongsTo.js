const { Company, User } = require("./sequelize/db");
const express = require('express');
const router = express.Router();

router.put('/user/create', async (req, res) => {
    let company = await Company.create({
        name: 'Company 1'
    });

    await User.create({
            name: 'User 1',
            companyId: company.id
        });

    res.send('Created');
});

router.get('/user/all', async (req, res) => {
    let user = await User.findOne({
        where: {
            id: 1
        },
        include: [
            {
                model: Company,
            },
        ]
    });

    res.send(user);
});


module.exports = router;