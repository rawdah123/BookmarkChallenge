const express = require('express');
const app = express();
const port = 3000;
require('dotenv').config();
const { models, sequelize } = require('./models');
const methodOverride = require('method-override');

app.use(methodOverride('_method'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/bookmarks', async (req, res) => {
	const bookmarks = await models.Bookmark.findAll({});
	res.render('index', {
		bookmarks : bookmarks
	});
});

app.post('/bookmarks', async (req, res) => {
	await models.Bookmark.create({
			name    : req.body.name,
			url     : req.body.url,
			comment : req.body.comment
		});
		res.redirect('/bookmarks');
});

app.delete('/bookmarks/:id', async (req, res) => {
	console.log(req.params);
	await models.Bookmark.destroy({
		where : {
			id : req.params.id
		}
	});
	res.redirect('/bookmarks');
});

app.put('/bookmarks/:id', async (req, res) => {
	console.log(req.params);
	console.log('req.cooooody.name: ' + req.body.name)
	await models.Bookmark.update({ 
        name    : req.body.name,
        url     : req.body.url,
        comment : req.body.comment,
		tag     : req.body.tag
     }, {
        where: {
            id: req.params.id
        }
    });
	res.redirect('/bookmarks');
});

app.post('/bmupdate', (req, res) => {
    res.render('bmupdate', {
        id: req.body.id
    });
});

app.post('/comment', (req, res) => {
    res.render('comment', {
        id: req.body.id
    });
});


app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
