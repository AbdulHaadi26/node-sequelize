const { Tutorial, Comment } = require("../sequelize/db");
const express = require('express');
const router = express.Router();

router.put('/tutorial/create', async (req, res) => {
    let tutorial = await Tutorial.create({
        title: 'New Tutorial',
        description: 'Any Description'
    });

    await Comment.bulkCreate([
        {
            name: 'Comment 1',
            text: 'I am comment 1',
            tutorialId: tutorial.id
        },
        {
            name: 'Comment 2',
            text: 'I am comment 2',
            tutorialId: tutorial.id
        }
    ]);

    res.send('Created');
});

router.get('/tutorial/all', async (req, res) => {
    let tutorial = await Tutorial.findOne({
        where: {
            id: 1
        },
        include: [
            {
                model: Comment,
                //attributes: ['id']
                //where: { condition }
            },
        ]
    });

    res.send(tutorial);
});


module.exports = router;