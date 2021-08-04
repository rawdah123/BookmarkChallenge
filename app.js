const express = require('express');
const app = express();
const port = 3000;
require('dotenv').config();
const { models, sequelize } = require('./models');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
	const bookmarks = await models.Bookmark.findAll({});
	res.render('index.ejs', {
		bookmarks : bookmarks
	});
});

app.post('/', async (req, res) => {
    sequelize.sync().then(async () => {
        await models.Bookmark.create({ 
            name: req.body.name,
            url: req.body.url,
            comment: req.body.comment
        })
    })
    res.redirect('/')
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
