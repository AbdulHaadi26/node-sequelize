const { Items, sequelize } = require("./sequelize/db");
const express = require('express');
const router = express.Router();

router.put('/item/create', async (req, res) => {
    await Items.bulkCreate([
        {
            name: 'Gaiters',
            price: 1000,
            type: 'Hiking'
        },
        {
            name: 'Shoes',
            price: 10000,
            type: 'Hiking'
        },
        {
            name: 'Make Up',
            price: 500,
            type: 'Women Accessories'
        },
        {
            name: 'Laptop',
            price: 50000,
            type: 'Electronics'
        },
    ]);

    res.send('Created');
});

router.get('/item/all', async (req, res) => {
    let result1 = await Items.findOne({
        attributes: ['id',
            [sequelize.fn('count', sequelize.col('id')), 'count'],
            [sequelize.fn('sum', sequelize.col('price')), 'total'],
        ]
    });

    let result2 = await Items.findAll({
        attributes: ['type',
            [sequelize.fn('sum', sequelize.col('price')), 'total'],
        ],
        group: ['type']
    });

    let data = {
        result1,
        result2
    }

    res.send(data);
});


module.exports = router;