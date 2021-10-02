const { Book, Author } = require("./sequelize/db");
const express = require('express');
const router = express.Router();

router.get('/book/create', async (req, res) => {
    let book = await Book.create({
        title: 'New Book'
    });

    await Author.create({
            name: 'Author 1',
            bookId: book.id
        });

    res.send('Created');
});

router.get('/book/all', async (req, res) => {
    let book = await Book.findOne({
        where: {
            id: 1
        },
        include: [
            {
                model: Author,
            },
        ]
    });

    res.send(book);
});


module.exports = router;