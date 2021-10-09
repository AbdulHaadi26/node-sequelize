const { Movie, Actor } = require("../sequelize/db");
const express = require('express');
const router = express.Router();

router.get('/movie/create', async (req, res) => {
    let movie = await Movie.create({
        name: 'New Movie'
    });

    let actor = await Actor.create({
        name: 'Actor 1',
    });

    await movie.addActor(movie.id, actor.id);
    
    let actor_second = await Actor.create({
        name: 'Actor 2',
    });

    await movie.addActor(movie.id, actor_second.id);

    res.send('Created');
});

router.get('/movie/all', async (req, res) => {
    let movie = await Movie.findOne({
        where: {
            id: 1
        },
        include: [
            {
                model: Actor,
            },
        ]
    });

    let actor = await Actor.findOne({
        where: {
            id: 1
        },
        include: [
            {
                model: Movie,
            },
        ]
    });

    let actor_second = await Actor.findOne({
        where: {
            id: 2
        },
        include: [
            {
                model: Movie,
            },
        ]
    });



    res.send({ movie, actor, actor_second });
});


module.exports = router;